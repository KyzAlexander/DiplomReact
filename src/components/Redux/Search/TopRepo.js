import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRepositories } from "./thunk";

function TopRepo(props) {
  const repos = useSelector((store) => store.topRepositorys.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRepositories());
  }, [dispatch]);

  return (
    <div>
      {repos.map((item) => (
        <div>{item.date}</div>
      ))}
    </div>
  );
}

export default TopRepo;
