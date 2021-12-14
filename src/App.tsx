import { useState } from "react";
import "./styles.css";
// import { Todo } from "./Todo";
// import axios from "axios";
// import { TodoType } from "./types/todo";
// import { Text } from "./Text";
// import { UserProfile } from "./UserProfile";
// import { User } from "./types/user";
import { UserCard } from "./components/UserCard";
// import { User } from "./types/api/user";
// import { UserProfile } from "./types/userProfiles";
import { useAllUsers } from "./hooks/useAllUsers";

// const user: User = {
//   name: "あられ",
//   // hobbies: ["映画", "ゲーム"],
// };

export default function App() {
  // タイプスクリプトの演習
  // const [todos, setTodos] = useState<Array<TodoType>>([]);
  // const onClickFetchTodoData = () => {
  //   axios
  //     .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => {
  //       setTodos(res.data);
  //     });
  // };

  // カスタムフック使わない版
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);  // const onClickFetchUserData = () => {
  //   setLoading(true);
  //   setError(false);
  //   axios
  //     .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       const data = res.data.map((user) => ({
  //         id: user.id,
  //         name: `${user.name}(${user.username})`,
  //         email: user.email,
  //         address: `${user.address.city}${user.address.suite}${user.address.street}`,
  //       }));
  //       setUserProfiles(data);
  //     })
  //     .catch(() => {
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  // カスタムフック使う版
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUserData = () => getUsers();

  return (
    <div className="App">
      <p style={{ fontSize: "30px" }}>タイプスクリプトの演習</p>
      {/* <UserProfile user={user} />
      <Text color="red" fontSize="20px" />
      <button onClick={onClickFetchTodoData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <br />
      <br /> */}
      <br />
      <p style={{ fontSize: "30px" }}>カスタムフックの演習</p>
      <button onClick={onClickFetchUserData}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard user={user} />
          ))}
        </>
      )}
    </div>
  );
}
