import { AllHTMLAttributes } from "react";
import SearchIcon from "../../assets/SearchIcon";

import styles from "./SearchBar.module.scss";
interface ISearchBar extends AllHTMLAttributes<HTMLDivElement> {}
const SearchBar = ({ ...rest }: ISearchBar) => {
  return (
    <div className={styles.searchBar}>
      <input {...rest} type="text" />
      <SearchIcon className={styles.SearchIcon} />
    </div>
  );
};
export default SearchBar;
