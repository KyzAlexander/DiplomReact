import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailedCard from "../../DetailedCard/DetailedCard";
import Header from "../../Header/Header";
import { selectRepositoriesByOwnerAndName } from "../../Redux/selector";

function DetailedRepository() {
  const { repositoryName, ownerName } = useParams();
  const repository = useSelector((state) =>
    selectRepositoriesByOwnerAndName(state, repositoryName, ownerName)
  );
  return (
    <>
      <Header />
      <main className="detailedRepository">
        {repository && <DetailedCard repository={repository} />}
      </main>
    </>
  );
}

export default React.memo(DetailedRepository);

