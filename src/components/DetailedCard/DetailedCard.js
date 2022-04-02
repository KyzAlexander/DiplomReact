import star from "../../assets/images/star.png";

export default function DetailedCard(props) {
  const { repository } = props;
  return (
    <section className="detailedCard">
      <div className="detailedCard__title">
        <h2 className="title__name">{repository.name}</h2>
      </div>

      <div className="detailedCard__star">
        <p className="star__number">{repository.stargazers_count}</p>
        <img className="star__img" src={star} alt="number of stars"></img>
      </div>

      <div className="detailedCard__avatar">
        <img
          className="avatar__avatar"
          href={repository.avatar_url}
          alt="avatar"
        ></img>
        {/* <a href={repository.avatar_url}> lo</a> */}
      </div>

      <div className="detailedCard__nickName">
        <a className="nickName__link" href={repository.html_url}>
          {repository.login}
        </a>
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
        {repository.contributors}
      </div>
    </section>
  );
}
