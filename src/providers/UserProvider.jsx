import { createContext, useState } from "react";
// 読み取り先は{useContext}で可能

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  /**
  ここで設定したProviderはこの要素で囲った中で
  valueとして定義した内容が参照可能となる
  useStateを渡すことで配下でstateの参照も更新も可能
  この場合使用するコンポーネントで意図しない再レンダリングが走り性能劣化する
  memo化することで必要な箇所のみのレンダリングをさせる
  ★今後はRecoilというライブラリが主流かな★
   */
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
