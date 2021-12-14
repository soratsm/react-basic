import { Link } from "react-router-dom";
/**
 * Router側で『<Route path="*"><Page404/></Route>』とする
 * path="*"はどれにも当てはまらないときに遷移する先
 */
export const Page404 = () => {
  return (
    <div>
      <h1>Pageが見つかりません</h1>
      <Link to="/">Topに戻る</Link>
    </div>
  );
};
