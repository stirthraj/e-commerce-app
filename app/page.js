import Image from "next/image";
import styles from "../styles/page.module.css";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      {/* <ProductList /> */}
    </main>
  );
}
