import React from "react";
import "./RepositoryCard.css";
import star from "../../assets/images/star.png";

function RepositoryCard(props) {
  const { repository } = props;
  return (
    <li>
      <section className="repositoryCard">
        <div className="repositoryCard__title">
          <h2 className="title__name">{repository.name}</h2>
          <div className="star">
            <p className="star__number">{repository.stargazers_count}</p>
            <img className="star__img" src={star} alt="number of stars"></img>
          </div>
        </div>
        <p className="repositoryCard__data">
          Data: {repository.updated_at.slice(0, 10)}
        </p>
        <a className="repositoryCard__link" href={repository.html_url}>
          Link on Github
        </a>
      </section>
    </li>
  );
}

export default React.memo(RepositoryCard);
