import React from "react";
import "./RepositoryCard.css";
import star from "../../assets/images/star.png";

function RepositoryCard(props) {
  return (
    <li>
      <section className="repositoryCard">
        <div className="repositoryCard__title">
          <h2 className="title__name">{props.name}</h2>
          <div className="star">
            <p className="star__number">{props.numberStar}</p>
            <img className="star__img" src={star} alt="number of stars"></img>
          </div>
        </div>
        <p className="repositoryCard__data">Data: {props.data}</p>
        <a className="repositoryCard__link" href={props.link}>
          Link on Github
        </a>
      </section>
    </li>
  );
}

export default React.memo(RepositoryCard);
