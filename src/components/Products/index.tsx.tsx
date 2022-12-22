import { AllHTMLAttributes } from "react";
import { IProductData } from "../../types";
import SingleProduct from "../SingleProduct";
import styles from "./Products.module.scss";

interface IProducts extends AllHTMLAttributes<HTMLDivElement> {
  items: IProductData[];
  rowsView: boolean;
}
const Products = ({ items, rowsView }: IProducts) => {
  return (
    <div
      className={`${styles.productsWrapper} ${
        rowsView ? styles.productsRows : styles.productsGrids
      }`}
    >
      {items?.map((item: IProductData, index: number) => (
        <SingleProduct productData={item} key={index} rowsView={rowsView} />
      ))}
    </div>
  );
};
export default Products;
