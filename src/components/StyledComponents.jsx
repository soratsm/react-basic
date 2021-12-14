/**
 * css-in-jsの中で根強い人気
 * ・importして当てる
 * ・変数名=import名.HTMLのタグ名
 * ・変数名をタグ名に置き換える
 * ★★メリット★★
 *  CSSが同じファイル内で分けて記載できるので見通しがいい
 *  SASS記法がそのまま使える
 * ★★デメリット★★
 *  スタイルを当てただけなのか、importしたタグなのかわからない
 *  ⇒頭に『S』を付けるなどの工夫が必要
 */
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled components -</STitle>
      <SButton>Fight!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
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
