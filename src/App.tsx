import { useState } from "react";
import ToolBar from "./Components/ToolBar/ToolBar";
import UserForm from "./Components/UserForm/UserForm";
import Users from "./Components/Users/Users";
import { User } from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Маджит",
      email: "madzitaliev@gmail.com",
      active: true,
      role: "administrator",
    },
    {
      id: "2",
      name: "Амир",
      email: "amirrrr@gmail.com",
      active: true,
      role: "editor",
    },
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <UserForm onSubmit={addUser}/>
            </div>
            <div className="col-6">
              <Users users={users}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
