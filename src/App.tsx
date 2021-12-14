import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // useStateによる状態管理関数
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力エリアに対するvalueの変化を定義（頻出）
  const onChangeTodoText = (event: any) => setTodoText(event.target.value);
  // 追加ボタン
  const onClickAdd = () => {
    // if文もアローと同じように一行とすることも可能
    if (todoText === "") return;
    // スプレッド構文によって元の配列を値渡しでコピーして、入力エリアの値を追加する
    const newTodos = [...incompleteTodos, todoText];
    // 新しい配列をsetすることで再度レンダリングされる
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除ボタン
  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    // 配列から何番目の項目を何個削除するか
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタン
  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタン
  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです！！</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
