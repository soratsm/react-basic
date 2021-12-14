import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "./../../store/UserState";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `あられ${val}`,
    image: "https://source.unsplash.com/IuJc2qh2TcA",
    email: "abc@emai.com",
    phone: "000-1234-5678",
    company: {
      name: "xyz.inc"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // useContextの代わりにRecoilを使用した版
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwich = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwich}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

// この辺はレシポンシブでいい感じに
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
