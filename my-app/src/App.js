import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
    </div>
  );
}

export default App;


//cd my-app
//nvm install 16.18.0
//nvm use 16.18.0
//npm start
