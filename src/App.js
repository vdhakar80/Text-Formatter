import "./App.css";
import Navigation from "./component/Navigation";
import Home from "./component/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default App;
