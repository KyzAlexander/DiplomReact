import RepositoryCard from "../RepositoryCard/RepositoryCard";
import './repositoryList.css'

function RepositoryList(props) {
  const { repositories = [] } = props;
  return (
    <ul className="repositoriesList">
      {repositories.map((card) => (
        <li>
          <RepositoryCard repository={card} />          
        </li>
      ))}
    </ul>
  );
}

export default RepositoryList;
