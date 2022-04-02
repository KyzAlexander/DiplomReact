import RepositoryCard from "../RepositoryCard/RepositoryCard.js";
import DetailedCard from "../DetailedCard/DetailedCard";

function RepositoryList(props) {
  const { repositories = [] } = props;
  return (
    <ul className="repositoriesList">
      {repositories.map((card) => (
        <li>
          {/* <RepositoryCard repository={card} /> */}
          <DetailedCard repository={card} />
        </li>
      ))}
    </ul>
  );
}

export default RepositoryList;
