import { useParams, useLocation } from "react-router-dom";
/**
 * useParams:『:id』の部分がを取得するために使用
 * useLocation:『?xxx=hogehoge』の部分を扱うために使用
 * URLSearchParams:javascriptの機能でqueryを扱うための関数を提供
 */

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは　{id} です</p>
      <p>クエリパラメータは　{query.get("name")} です</p>
    </div>
  );
};
