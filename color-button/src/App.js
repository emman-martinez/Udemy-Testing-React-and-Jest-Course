import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newBottonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setButtonColor(newBottonColor);
        }}
        disabled={disabled}
        style={{ backgroundColor: !disabled ? buttonColor : "gray" }}
      >
        Change to {replaceCamelWithSpaces(newBottonColor)}
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
