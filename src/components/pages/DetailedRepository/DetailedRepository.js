import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import { selectRepositoriesByOwnerAndName } from "../../Redux/selector";
import RepositoryCard from "../../RepositoryCard/RepositoryCard";

function DetailedRepository() {
  const { repositoryName, ownerName } = useParams();
  const repository = useSelector((state) =>
    selectRepositoriesByOwnerAndName(state, repositoryName, ownerName)
  );
  return (
    <>
      <Header />
      <main className="detailedRepository">
        {/* здесь надо другую карточку с подробными деталями  */}

        {repository && <RepositoryCard repository={repository} />}
      </main>
    </>
  );
}

export default React.memo(DetailedRepository);
