import React from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <p>Enter your name: </p>
      <input type="text" onChange={(event) => setInput(event.target.value)} />

      <p>{input}</p>
    </div>
  );
};

export default App;
