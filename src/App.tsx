import ToolBar from "./Components/ToolBar/ToolBar";
import UserForm from "./Components/UserForm/UserForm";

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
            <div className="col-6">users</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
