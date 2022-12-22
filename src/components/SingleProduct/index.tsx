import { AllHTMLAttributes } from "react";
import { IProductData } from "../../types";
import styles from "./SingleProduct.module.scss";
import LoveIcon from "../../assets/LoveIcon";
import StarIcon from "../../assets/StarIcon";

interface ISingleProduct extends AllHTMLAttributes<HTMLDivElement> {
  productData: IProductData;
  rowsView: boolean;
}
const SingleProduct = ({ productData, rowsView, ...rest }: ISingleProduct) => {
  const ratingPercentage = productData?.rating?.rate
    ? productData?.rating?.rate * 10
    : 100;
  return (
    <div
      className={`${styles.product} ${
        rowsView ? styles.productRow : styles.productGrid
      }`}
      {...rest}
    >
      <div className={styles.iconHolder}>
        <LoveIcon fontSize={20} />
      </div>
      <div className={styles.imgWrapper}>
        {productData?.image && <img src={productData?.image} />}
      </div>
      <p className={styles.category}>{productData?.category}</p>
      <p className={styles.title}>{productData?.title}</p>
      <div className={styles.starIcons}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <div
          className={styles.showingStarIcons}
          style={{
            clipPath: `polygon(${ratingPercentage}% 0, 100% 0, 100% 100%, ${ratingPercentage}% 100%)`,
          }}
        />
      </div>
      <p className={styles.price}>{productData?.price}$</p>
    </div>
  );
};
export default SingleProduct;
