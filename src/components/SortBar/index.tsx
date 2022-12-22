import { AllHTMLAttributes } from "react";
import { useQueryClient } from "react-query";
import GridIcon from "../../assets/GridIcon";
import RowsIcon from "../../assets/RowsIcon";
import { SORT_BY } from "../../types";
import styles from "./SortBar.module.scss";
interface ISortBar extends AllHTMLAttributes<HTMLDivElement> {
  setSortBy: (option: SORT_BY) => void;
  setViewType: (option: boolean) => void;
  productsCount: number;
  currentShowingCount: number;
}
const SortBar = ({
  setSortBy,
  productsCount,
  currentShowingCount,
  setViewType,
}: ISortBar) => {
  return (
    <div className={styles.SortBar}>
      <p className={styles.results}>
        showing {currentShowingCount}-{productsCount} Results
      </p>
      <div className={styles.sortType}>
        <select
          className={styles.selectInput}
          onChange={(event) => setSortBy(event.currentTarget.value as SORT_BY)}
        >
          <option value={SORT_BY.ASC}>asc</option>
          <option value={SORT_BY.DESC}>desc</option>
        </select>
        <RowsIcon onClick={() => setViewType(true)} />
        <GridIcon onClick={() => setViewType(false)} />
      </div>
    </div>
  );
};
export default SortBar;
