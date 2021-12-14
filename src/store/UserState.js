// ★RecoilでのState管理
// Providerの代わりに使用する
// 『useSetRecoilState』を使用している箇所は
// 再レンダリングが起きないようにRecoil側が管理してくれる
import { atom } from "recoil";

export const userState = atom({
  // システム全体でこのstateを参照できる一意のキー：ファイル名と揃える
  key: "userState",
  default: { isAdmin: false }
});
