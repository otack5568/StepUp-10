import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { Todo } from "./todo";
import { TodoType } from "./types/todo";
import { User } from "./types/user";
import { Text } from "./text";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "じゃけぇ"
  //hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
