import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  /**
   * 最適化手法②useCallback化(関数のmemo化)
   * 関数を子要素に渡す場合、アロー関数はレンダリングごとに新たに生成される
   * そのため子要素のmemo化だけでは再レンダリングを抑制できないため必要
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  /**
   * 最適化手法③useMemo化(変数のmemo化)
   * ★使用頻度は高くない
   * 変数の中で重い処理を書いている場合など局所的に使用すれば有用
   */
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <p>★★ 最適化手法について ★★</p>
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <br />
      <br />
      <p>★★ CSSの当て方について ★★</p>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion/>
    </div>
  );
}
