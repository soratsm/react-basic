import { BrowserRouter, Link } from "react-router-dom";
/**
 * BrowserRouter:このタグで囲った中をルーティング制御する
 * Link：押下によってパスを書き換える
 */

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
