// atomsを組み合わせてスタイルでラッピングする

import styled from "styled-components";
import { Input } from "../atoms/input/Input";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SearchInput");

  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
