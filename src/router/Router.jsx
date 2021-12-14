import { Switch, Route } from "react-router-dom";
/**
 * Switch：どのパスでどのコンポーネントを出すか設定する
 * Route：Switchの中でルートにマッチしたものを表示していく
 *  ⇒『exact』をつけないと完全一致のみ対象とならない
 *  ⇒『render』で短く記述可能
 *    ⇒propsを標準で受け取る。console.logで見ると分かるが、
 *    『{ match: { url } }』でrender元のpathを取得可能。matchの中のurlを取得
 */

import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
/**
 * Page1:ネスト化したページのルーティング
 * 切り出した配下の配列をmapで回してレンダリング
 */
import { Page2Routes } from "./Page2Routes";
/**
 * Page2:URL　Parameter（/xxxの部分)
 * 動的パラメータ（userIDなど）を使用したページのルーティング
 * 『:』を使用し、パラメータの受け側で『useParams』で受ける
 */

export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              {Page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route
          path="/page2"
          render={({ match: { url } }) => (
            <Switch>
              {Page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
