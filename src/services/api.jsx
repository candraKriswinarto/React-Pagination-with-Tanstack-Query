import { ITEM_PER_PAGE } from "../utils/constants"

export const getProductList = async (page) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEM_PER_PAGE}`);
  const totalData = response.headers.get('X-Total-Count');
  const data = await response.json();
  return {
    products: data,
    totalData
  }
}