import { IProductData, SORT_BY } from "../types";
import httpDriver from "./httpDriver";

export const getAllProducts = async (
  sortBy: SORT_BY | false
): Promise<IProductData[]> => {
  const { data } = await (sortBy
    ? httpDriver.get(`?sort=${sortBy}`)
    : httpDriver.get("/"));
  return data;
};
