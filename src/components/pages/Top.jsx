import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "./../../store/UserState";
export const Top = () => {
  const history = useHistory();

  /**
  ステート管理：良い実装
  ⇒だけど最新はRecoil
   */
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    // history.push({ pathname: "/users", state: { isAdmin: true } });
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    // history.push({ pathname: "/users", state: { isAdmin: false } });
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  /**
  ステート管理：だめな実装
  編集ボタンはグローバルステート管理をしなかった場合の実装
  フラグのバケツリレーでatomsまで受け渡す必要がある
  この代わりとしてProviderを利用する
  ⇒"providers/UserProviders.jsx"
   */

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
