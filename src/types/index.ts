export interface IProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}
export enum SORT_BY {
  ASC = "asc",
  DESC = "desc",
}
