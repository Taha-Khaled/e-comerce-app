import { FunctionComponent, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getAllProducts } from "../../apis/Requests";
import { IProductData, SORT_BY } from "../../types";
import SearchBar from "../../components/SearchBar";
import SortBar from "../../components/SortBar";
import styles from "./Home.module.scss";
import Products from "../../components/Products/index.tsx";

const Home: FunctionComponent = () => {
  const [sortBy, setSortBy] = useState<SORT_BY | undefined>(undefined);
  const [currentData, setCurrentData] = useState<IProductData[]>([]);
  const [rowsView, setRowsView] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery(
    "fetchAllProducts",
    () => getAllProducts(sortBy ? sortBy : false),
    {
      onSuccess(data) {
        filterByTitle(searchText, data);
      },
    }
  );
  const filterByTitle = (text: string, data?: IProductData[]) => {
    setCurrentData(
      data?.filter((item: IProductData) =>
        item?.title.toLowerCase()?.includes(text.toLowerCase())
      ) as IProductData[]
    );
  };

  useEffect(() => {
    queryClient.removeQueries(["fetchAllProducts"]);
    refetch();
  }, [sortBy]);

  return (
    <div className={styles.Home}>
      <div className={styles.filterContainer}>
        <SearchBar
          placeholder="Search Product"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setSearchText(event.currentTarget.value);
            filterByTitle(event.currentTarget.value, data);
          }}
        />
        <SortBar
          setSortBy={setSortBy}
          setViewType={setRowsView}
          productsCount={data?.length || 0}
          currentShowingCount={currentData?.length || 0}
        />
      </div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Products items={currentData} rowsView={rowsView} />
      )}
    </div>
  );
};
export default Home;
