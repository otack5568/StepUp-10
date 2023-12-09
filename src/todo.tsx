import { TodoType } from "./types/todo";

export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed"> //不要なidを取り除いている（必要なものを選択している）Omitで省略も可能
) => {
  const { title, userId, completed = false } = props; //undefinedのときの初期値設定も可能
  const completeMark: string = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}{ユーザー：${userId}}`}</p>;
};
