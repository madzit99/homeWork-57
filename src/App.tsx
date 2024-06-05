import ToolBar from "./Components/ToolBar/ToolBar";
import UserForm from "./Components/UserForm/UserForm";
import Users from "./Components/Users/Users";

const App = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <UserForm/>
            </div>
            <div className="col-6">
              <Users/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
