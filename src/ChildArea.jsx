import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

/**
 * 最適化手法①memo化
 * reactは親コンポーネントがレンダリングされると子要素のレンダリングもされる
 * 変更が起きてないのにレンダリングされるためコストが高くなる
 * memo化は変更がないと再レンダリングされなくなる
 */
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()];
  // 重い処理
  // data.forEach(() => {
  //   console.log("...");
  // });

  return (
    <>
      {open ? (
        <div style={style}>
          <p disabled={open}>ChildArea</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
