import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RepositoryCard from "../../RepositoryCard/RepositoryCard";
import { getTopRepositories } from "./thunk";

export default function TopRepo(props) {
  const repos = useSelector((store) => store.topRepositories.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRepositories());
  }, [dispatch]);

  return (
    <div>
      {repos.map((item) => (
        <ul>
          <RepositoryCard
            name={item.name}
            numberStar={item.stargazers_count}
            data={item.updated_at.slice(0, 10)}
            link={item.html_url}
          />
        </ul>
      ))}
    </div>
  );
}
