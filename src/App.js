import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

import "./styles.css";

const user = {
  name: "じゅん",
  image: "https://source.unsplash.com/g5ZM33jizAw",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};
export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>push</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
