import { ITEM_PER_PAGE } from "../utils/constants";

const Pagination = ({
  currentPage,
  totalItems,
  onPageChange,
  isPreviousData,
}) => {
  const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE);

  const handlePrevClick = () => onPageChange(currentPage - 1);
  const handleNextClick = () => onPageChange(currentPage + 1);

  return (
    <div className="btn-group">
      <button
        disabled={currentPage === 1 || isPreviousData}
        onClick={handlePrevClick}
        className="btn"
      >
        «
      </button>
      <button className="btn">Page {currentPage}</button>
      <button
        disabled={currentPage === pageCount || isPreviousData}
        onClick={handleNextClick}
        className="btn"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
