import star from "../../assets/images/star.png";
import PropTypes from "prop-types";
import React from "react";
import './detailedCard.css'

function DetailedCard(props) {
  const { repository } = props;
  return (
    <section className="detailedCard">

        <div className="wrapper-Avatar-nickName">
          <div className="detailedCard__avatar">
            <img
              className="avatar__avatar"
              src={repository.owner.avatar_url}
              alt="avatar"
            ></img>        
          </div>
          <div className="detailedCard__nickName">
            <h1>
              <a className="nickName__link" href={repository.html_url} target='_blank'>
              {repository.owner.login}
            </a>
            </h1>
          </div>          
        </div>

        <div className="wrapper-title-star">
          <div className="detailedCard__title">
              <h2 className="title__name">{repository.name}</h2>
            </div>

          <div className="detailedCard__star">
            <p className="star__number">{repository.stargazers_count}</p>
            <img className="star__img" src={star} alt="number of stars"></img>
          </div>
        </div>

      <div className="detailedCard__language">
        <p>
          <span>Languages used: </span>
          {repository.language}
        </p>
      </div>

      <div className="detailedCard__description">
        <p>
          <span>Short description: </span>
          {repository.description}
        </p>
      </div>

      <div className="detailedCard__contributors">
        {repository?.contributors}
      
      </div>
    </section>
  );
}

DetailedCard.propTypes = {
  repository: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contributors: PropTypes.string.isRequired,
  }),
};

export default React.memo(DetailedCard);
