// Cardコンポーネント自体はどのレイアウトでも提供できるようにコレ自体に大きさの概念を持たせない
// 呼ぶ側の責務とする

import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

// box-shadow: 色 X軸の距離 Y軸の距離 ぼかし 広がり
const SCard = styled.div`
  background-color: white;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
