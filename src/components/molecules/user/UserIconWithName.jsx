// moleculesでも役割が限定的ならディレクトリ分けする
import styled from "styled-components";
import { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "./../../../store/UserState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");

  // 同じく『user』を受け取ってもいいが、ここでは役割を明確化するためにpropsも限定させる
  const { image, name } = props;

  // グローバルなステート管理による読み込み方法
  // const { userInfo } = useContext(UserContext);
  // 下はRecoilを使用した版
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;
const SImage = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
