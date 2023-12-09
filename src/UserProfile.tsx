import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>{user.name}</dt>
      <dd></dd>
      <dt>趣味</dt>
      <dt>{user.hobbies?.join("／")}</dt>
    </dl>
  );
};

//オプショナルチェイニング
//?をつけることで、undefinedのときも例外にならない（このとき、空白で出力される
