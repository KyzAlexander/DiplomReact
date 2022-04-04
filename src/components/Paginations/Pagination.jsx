import React, { useCallback, useMemo } from "react";
import PageItem from "./PageItem";
import "./pagination.css";
import PropTypes from "prop-types";

function Pagination(props) {
  const {
    total = 0,
    limit = 1,
    showedFirstPagesCount = 5,
    showedLastPagesCount = 2,
    selectedPage = 1,
    onPageChange,
  } = props;

  const pagesAmount = Math.ceil(total / limit);
  const totalPagesToShow = showedFirstPagesCount + showedLastPagesCount;
  const firstPagesAmount =
    pagesAmount > totalPagesToShow ? showedFirstPagesCount : pagesAmount;
  const lastPagesAmount =
    pagesAmount > totalPagesToShow ? showedLastPagesCount : 0;

  const handleSetNextPage = useCallback(() => {
    onPageChange(selectedPage + 1);
  }, [onPageChange, selectedPage]);
  const handleSetPrevPage = useCallback(() => {
    onPageChange(selectedPage - 1);
  }, [onPageChange, selectedPage]);
  const handlePageClick = useCallback(
    (page) => {
      onPageChange(page);
    },
    [onPageChange]
  );

  const firstPages = useMemo(() => {
    return [...Array(firstPagesAmount).keys()].map((index) => {
      const page = index + 1;
      return (
        <li className="pagination__page" key={page}>
          <PageItem
            page={page}
            selected={page === selectedPage}
            onPageClick={handlePageClick}
          />
        </li>
      );
    });
  }, [firstPagesAmount, selectedPage, handlePageClick]);

  const lastPages = useMemo(() => {
    const lastPage = pagesAmount;
    return [...Array(lastPagesAmount).keys()].map((index) => {
      const page = lastPage + index;
      return (
        <li className="pagination__page" key={page}>
          <PageItem
            page={page}
            selected={page === selectedPage}
            onPageClick={handlePageClick}
          />
        </li>
      );
    });
  }, [lastPagesAmount, selectedPage, pagesAmount, handlePageClick]);

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={handleSetPrevPage}
        className="pagination__nav-button"
      >
        Prev
      </button>
      <ul className="paginstion__pages-list">
        {firstPages}
        {lastPagesAmount !== 0 && <span>...</span>}
        {lastPages}
      </ul>
      <button
        type="button"
        onClick={handleSetNextPage}
        className="pagination__nav-button"
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  showedFirstPagesCount: PropTypes.number.isRequired,
  showedLastPagesCount: PropTypes.number.isRequired,
  selectedPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default React.memo(Pagination);
