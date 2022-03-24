import React, { useState } from "react";
import "./pagination.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

function PageButton(props) {
  const [isSelected, setIsSelected] = useState(false);
  const pageNumber = props.pageNumber;
  return (
    <Link
      to={`/Repos/pages/${pageNumber}`}
      classname='btn'
      onClick={() => setIsSelected((prevState) => !prevState)}
    >
      {pageNumber}
    </Link>
  );
}
const pages = [1, 2, 3, 4, 5];

export default function Pagination() {
  const params = useParams();
  return (
    <div>
      <PreviosButton isDisabled={params.page === "1" ? true : false} />
      <PagesList pages={pages} />
      <div className='next'>Next</div>
    </div>
  );
}

function PagesList(props) {
  const pagess = props.pages;
  const pagesElements = pagess.map((el) => (
    <PageButton pageNumber={el}></PageButton>
  ));
  return <div classname='pagesList'>{pagesElements}</div>;
}

function PreviosButton(props) {
  const isDisabled = props.isDisabled;

  return <div className={isDisabled ? "disabled" : "prev"}>Previos</div>;
}
