import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import { getProductList } from "../services/api";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, data, isError, isFetching, isPreviousData,  error } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getProductList(currentPage),
    keepPreviousData: true
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-2xl my-5 underline font-bold">
        Pagination
      </h1>
      <ProductList products={data.products} />
      <div className="flex items-center justify-between my-5">
        <Pagination
          currentPage={currentPage}
          totalItems={data.totalData}
          onPageChange={(page) => setCurrentPage(page)}
          isPreviousData={isPreviousData}
        />
        {isFetching ? <LoadingSpinner /> : null}
      </div>
    </div>
  );
};

export default Products;
