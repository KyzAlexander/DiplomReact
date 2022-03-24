import RepositoryCard from "../RepositoryCard/RepositoryCard.js";

function RepositoryList() {
  const repos = [
    {
      name: "HomeWork",
      autor: "Alex",
      access: "Public",
      type: "JavaScript",
      lastCommitData: "09.03.2022",
    },
    {
      name: "ClassWork",
      autor: "Gena",
      access: "Private",
      type: "JavaScript",
      lastCommitData: "11.03.2022",
    },
  ];
  let res = repos.map((card) => {
    return (
      <li>
        <RepositoryCard
          name={card.name}
          autor={card.autor}
          access={card.access}
          type={card.type}
          lastCommitData={card.lastCommitData}
        />
      </li>
    );
  });
  return <ul>{res}</ul>;
}

export default RepositoryList;
