// 役割が何なのかを意識して原子を作っていく
// 当ボタンでは画面で主要となるボタンでどこでも使えるようなボタンとする

import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// スタイルのみのボタンを扱うときは『styled.button』ではなく『styled(xxxButton)』
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
