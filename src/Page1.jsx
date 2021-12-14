import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // state（ここではarr）を渡すページ遷移
  // Linkのtoにて受け渡す
  // 受け取り側ではuseLocationの{state}を使用して取り出せる
  const arr = [...Array(100).keys()];
  // console.log(arr);

  const history = useHistory();
  // historyでurlをpushすると遷移できる。goBackで戻ってこれる
  const onClickDetailA = () => history.push("/page1/detailA");
  console.log(history);

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>Page1DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
