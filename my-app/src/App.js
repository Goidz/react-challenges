import css from './App.module.css';
import Sidebar from "./components/Sidebar.js";
import NavBarSimple from "./components/NavBarSimple.js";

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
    </div>
  );
}

export default App;

// nvm install 16 && nvm use 16
//cd my-app
//nvm install 16.18.0
//nvm use 16.18.0
//npm start
