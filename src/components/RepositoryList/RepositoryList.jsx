import RepositoryCard from "../RepositoryCard/RepositoryCard";
import PropTypes from "prop-types";
import './repositoryList.css'

function RepositoryList(props) {
  const { repositories = [] } = props;
  return (
    <ul className="repositoriesList">
      {repositories.map((repository) => (
        <li>
          <RepositoryCard repository={repository} />          
        </li>
      ))}
    </ul>
  );
}

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired,  
};

export default RepositoryList;
