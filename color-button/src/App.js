import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newBottonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(newBottonColor);
        }}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newBottonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
