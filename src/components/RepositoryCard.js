import React from "react";
import "../assets/styles/RepositoryCard.css";

function RepositoryCard(props) {
  return (
    <section className='repositoryCard'>
      <div className='repositoryCard__title'>
        <h2 className='title__name'>{props.name}</h2>
        <p className='title__access'>{props.access}</p>
      </div>
      <div className='repositoryCard__subtitle'>
        <p className='subtitle__type'>{props.type}</p>
        <p className='subtitle__lastCommitData'>{props.lastCommitData}</p>
        <p className='subtitle__autor'>{props.autor}</p>
      </div>
    </section>
  );
}

export default React.memo(RepositoryCard);
