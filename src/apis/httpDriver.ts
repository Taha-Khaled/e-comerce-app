import axios from "axios";
const httpDriver = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});
export default httpDriver;
