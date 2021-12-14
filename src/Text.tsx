import { VFC } from "react";
type Props = {
  color: string;
  fontSize: string;
};

// FC：暗黙的にchildrenを受け取る
// 明示的にすべき為、Ver18で変わりそう
// それまでは暫定的にVFCにすることで明示的になる
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  // 同じ名前の場合省略できる{{ color:color , fontSize:fontSize }}
  return <p style={{ color, fontSize }}>テキストです</p>;
};
