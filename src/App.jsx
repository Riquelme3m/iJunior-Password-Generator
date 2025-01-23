import Password from "./components/Password"
import Length from "./components/Length";
import Checkbox from "./components/Checkbox";
import Generate from "./components/Generate";
import Strength from "./components/Strength";

import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <Password />
      <div className="options">
        <Length />

        <div className="checkboxes">
          <Checkbox id="upper" label="Include Uppercase Letters" />
          <Checkbox id="lower" label="Include Lowercase Letters" />
          <Checkbox id="number" label="Include Numbers" />
          <Checkbox id="symbols" label="Include Symbols" />
        </div>

        <Strength />

        <Generate />
      </div>
    </div>
  )
}

export default App
