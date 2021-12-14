import { TodoType } from "./types/todo";
import { VFC } from "react";

// 対象を選択：Pick<TodoType, "userId" | "title" | "completed">
// 対象を除外：Omit<TodoType, "id">

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}（ユーザー:${userId}）`}</p>;
};
