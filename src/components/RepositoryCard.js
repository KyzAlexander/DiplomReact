import React from "react";
import "../assets/styles/RepositoryCard.css";

function RepositoryCard() {
  const repos = [
    {
      name: "HomeWork",
      autor: "Alex",
      access: "Public",
      type: "JavaScript",
      lastCommitData: "09.03.2022",
    },
  ];
  let res = repos.map((item) => {
    return (
      <section className='repositoryCard'>
        <div className='repositoryCard__title'>
          <h2 className='title__name'>{item.name}</h2>
          <p className='title__access'>{item.access}</p>
        </div>
        <div className='repositoryCard__subtitle'>
          <p className='subtitle__type'>{item.type}</p>
          <p className='subtitle__lastCommitData'>{item.lastCommitData}</p>
          <p className='subtitle__autor'>{item.autor}</p>
        </div>
      </section>
    );
  });
  return <li>{res}</li>;
}

const MemoizedRepositoryCard = React.memo(RepositoryCard);
export default MemoizedRepositoryCard;
