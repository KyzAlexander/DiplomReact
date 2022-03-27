import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <div>
          {item.name} {item.id} {item.visibility}
        </div>
      ))}
    </div>
  );
}
