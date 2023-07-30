// components/Banner.js
"use client";
import React, { useCallback, useEffect } from "react";
import styles from "../styles/banner.module.css";
import Image from "next/image";
import ProductList from "./ProductList";
import axios from "axios";
async function fetchApi(setData, category) {
  if (category === "") {
    let res = await axios("https://fakestoreapi.com/products");
    setData(res.data);
  } else {
    let res = await axios(
      "https://fakestoreapi.com/products/category/" + category
    );
    setData(res.data);
  }
}

const Banner = () => {
  const [data, setData] = React.useState();
  const [category, setCategory] = React.useState("");
  const [searchInput, setSeachInput] = React.useState("");

  const fetchData = useCallback(
    (category) => {
      setCategory(category);
      fetchApi(setData, category);
    },
    [category]
  );

  useEffect(() => {
    fetchApi(setData, "");
  }, []);

  const products = [
    {
      id: 1,
      name: "Man T -shirt",
      price: 19.99,
      image: "/tshirt-img.png",
    },
    {
      id: 2,
      name: "Man T -shirt",
      price: 29.99,
      image: "/dress-shirt-img.png",
    },
    {
      id: 3,
      name: "Woman Scart",
      price: 39.99,
      image: "/women-clothes-img.png",
    },
    // Add more product data as needed
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header_section_top}>
          <ul>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">Gift Ideas</a>
            </li>
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Today&apos;s Deals</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Eflyer</h2>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.bar}>
          <div className={styles.item1}>
            <Image src="/toggle-icon.png" alt="" width={40} height={32} />
          </div>
          <div className={styles.item2}>
            <select
              className={styles.barBtn}
              onChange={(event) => fetchData(event.target.value)}
            >
              <option value="">All Category</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">men&apos;s clothing</option>
              <option value="women's clothing">women&apos;s clothing</option>
            </select>
          </div>
          <div className={styles.grid}>
            <input
              className={styles.barSearchInput}
              placeholder="Search this blog"
              type="text"
              value={searchInput}
              onChange={(e) => setSeachInput(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setData(
                  data.filter((dt) =>
                    dt.title
                      .toLowerCase()
                      .split(" ")
                      .includes(searchInput.toLowerCase())
                  )
                );
                setSeachInput("");
              }}
              className={styles.barSearchIcon}
            >
              <i className="fa fa-search" style={{ color: "#fff" }} />
            </button>
          </div>
          <div className={styles.language}>
            <button className={styles.barBtn}>English</button>
          </div>
          <div className={styles.barLink}>
            <i className="fa fa-cart-plus"></i>
            <div>CART</div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            GET START
            <br /> YOUR FAVRIOT SHOPING
          </h1>
          <div className={styles.buyBtn}>
            <button className={styles.barBtn}>BUY NOW</button>
          </div>
        </div>
      </div>
      <ProductList
        heading={category === "" ? "Man & Woman Fashion" : category}
        products={
          (searchInput.length > 1 &&
            (data || []).filter(
              (dt) =>
                dt.title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
            )) ||
          data
        }
      />

      <footer
        style={{
          background: "#fff",
          color: "black",
          textAlign: "center",
        }}
      >
        <h1>
          <b>E-commerce Website</b>
        </h1>
        <p className="copyright_text">
          © 2023 All Rights Reserved. Design by{" "}
          <a href="https://www.linkedin.com/in/tirth-raj/">Tirth Raj Kumar</a>
        </p>
      </footer>
    </>
  );
};

export default Banner;
