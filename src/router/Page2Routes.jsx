import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// 『:id』の部分が動的パラメータとして渡ってくる
// ※idの部分は何でもいい
export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
