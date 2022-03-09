// import { useState } from "react";

function CardRepository() {
  //   const [repos, setRepos] =
  //     useState[
  //       {
  //         name: "HomeWork",
  //         autor: "Alex",
  //         access: "Public",
  //         type: "JavaScript",
  //         lastCommitData: "09.03.2022",
  //       }
  //     ];
  const repos = [
    {
      name: "HomeWork",
      autor: "Alex",
      access: "Public",
      type: "JavaScript",
      lastCommitData: "09.03.2022",
    },
  ];
  return (
    <section className='cardRepository'>
      <div className='cardRepository__title'>
        <h2 className='title__name' key={repos.name}>
          {repos.name}
        </h2>
        <p className='title__access'></p>
      </div>
      <div className='cardRepository__subtitle'>
        <p className='subtitle__type'></p>
        <p className='subtitle__lastCommitData'></p>
        <p className='subtitle__autor'></p>
      </div>
    </section>
  );
}

export default CardRepository;
