import React from "react";
import styles from "./ProductInfo.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ProductInfo() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Final Offer</h2>
      <div className={styles.info}>
        <img src="./IMG/image-1.jpg" className={styles.cover} />
        <div className={styles.details}>
          <p className={styles.author}>Author: Lauren Asher</p>
          <p className={styles.price}>Price: 16,05 €</p>
          <div className={styles.btns}>
            <button className={styles.cart}>
              <AddShoppingCartIcon />
            </button>
            <button className={styles.fav}>
              <FavoriteBorderIcon />
            </button>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto
            deserunt ducimus obcaecati sint cupiditate possimus delectus quia
            eius quas?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
