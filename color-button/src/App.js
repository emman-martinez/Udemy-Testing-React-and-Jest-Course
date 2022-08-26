import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newBottonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(newBottonColor);
        }}
        disabled={disabled}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newBottonColor}
      </button>
      <input
        aria-checked={disabled}
        defaultChecked={disabled}
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
