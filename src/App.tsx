import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Link className="App-header__logo" to="/">
          AI4Abolition
        </Link>
      </div>
      <div className="App-body">
        <Outlet />
      </div>
      <footer className="App-footer">
        <h6>
          AI4Abolition: Empowering Communities. Building an Inclusive Future.
        </h6>
        <Link to="/about">About Us</Link>
      </footer>
    </div>
  );
}

export default App;
