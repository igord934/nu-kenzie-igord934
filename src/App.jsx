import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login login={() => setIsLoggedIn(true)} />
      ) : (
        <Home logout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}

export default App;
