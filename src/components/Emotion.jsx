/**
 * いろいろな当て方ができる
 * ★★メリット★★
 *  色々な使い方がある
 * ★★デメリット★★
 *  記載統一のための認識合わせが必要
 *  プラグマの記述が面倒
 *  ⇒環境定義に記載すれば問題ない
 */

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // emotionの当て方①sassと同じ当て方ができる
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // emotionの当て方②inline-styleと同じ記法
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>Fight!!</SButton>
    </div>
  );
};

// emotionの当て方③styledComponentsと同じ記法
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: white;
    cursor: pointer;
  }
`;
