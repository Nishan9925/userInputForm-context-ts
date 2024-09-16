import { useState } from "react";
import "./App.css";
import { UserList } from "./components/UserList";
import { AddUser } from "./components/AddUser";
import { InputUser, IUser } from "./types";
import { UserContext } from "./context";

function App() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 101, name: "John", age: 45, salary: 1000 },
    { id: 102, name: "Jake", age: 36, salary: 800 },
    { id: 103, name: "Jan", age: 24, salary: 1200 },
    { id: 104, name: "Jolie", age: 65, salary: 650 },
  ]);

  const removeUser = (id: number): void => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAdd = (user: InputUser) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };
  return (
    <>
      <UserContext.Provider value={{ users, removeUser, handleAdd }}>
        <AddUser />
        <UserList />
      </UserContext.Provider>
    </>
  );
}

export default App;
