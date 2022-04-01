import React, { useCallback, useMemo } from "react";
import PageItem from "./PageItem";

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
    return [...Array(firstPagesAmount).keys()].map((value) => {
      const page = value + 1;
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
      const page = lastPage - index;
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

export default React.memo(Pagination);

// import React, { useState } from "react";
// import "./pagination.css";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function PageButton(props) {
//   const [isSelected, setIsSelected] = useState(false);
//   const pageNumber = props.pageNumber;
//   return (
//     <Link
//       // to={`/Repos/pages/${pageNumber}`}
//       classname="btn"
//       onClick={() => setIsSelected((prevState) => !prevState)}
//     >
//       {pageNumber}
//     </Link>
//   );
// }
// const pages = [1, 2, 3, 4, 5];

// export default function Pagination() {
//   const params = useParams();
//   return (
//     <div>
//       <PreviosButton isDisabled={params.page === "1" ? true : false} />
//       <PagesList pages={pages} />
//       <div className="next">Next</div>
//     </div>
//   );
// }

// function PagesList(props) {
//   const pagess = props.pages;
//   const pagesElements = pagess.map((el) => (
//     <PageButton pageNumber={el}></PageButton>
//   ));
//   return <div classname="pagesList">{pagesElements}</div>;
// }

// function PreviosButton(props) {
//   const isDisabled = props.isDisabled;

//   return <div className={isDisabled ? "disabled" : "prev"}>Previos</div>;
// }
