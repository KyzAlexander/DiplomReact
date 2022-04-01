import React, { useCallback } from "react";

function PageItem(props) {
  const { page, onPageClick, selected } = props;

  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      onPageClick(page);
    },
    [onPageClick, page]
  );

  const className = `pagination-page ${
    selected ? "pagination-page--selected" : ""
  }`;

  return (
    <a href="/" onClick={handleClick} className={className}>
      {page}
    </a>
  );
}

export default React.memo(PageItem);
