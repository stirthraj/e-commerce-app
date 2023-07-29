// components/ProductList.js
import React from "react";
import styles from "../styles/product.module.css";
import Image from "next/image";

const ProductList = ({ heading, products }) => {
  if (!Array.isArray(products) && !products?.length) return null;
  else
    return (
      <article className={styles.productContainer}>
        <h2>{heading.toUpperCase()}</h2>
        <div className={styles.container}>
          <div className={styles.row}>
            {products?.map((product) => (
              <div className={styles.col} key={product.id}>
                <div>
                  <h3>{product.title}</h3>
                  <p
                    style={{
                      padding: "8px 0px",
                    }}
                  >
                    <span style={{ color: "#f02" }}>Price:</span> $
                    {product.price}
                  </p>
                </div>
                <div style={{ width: "100%" }}>
                  <Image src={product.image} alt="" height={380} width={200} />
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: "#f02", fontWeight: "bolder" }}>Buy Now</p>
                  <p>See More</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
};

export default ProductList;
