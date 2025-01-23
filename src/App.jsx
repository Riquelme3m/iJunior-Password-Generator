import Password from "./components/Password"
import Length from "./components/Length";
import Checkbox from "./components/Checkbox";  // Note a mudança de Checkboxes para Checkbox
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

        <button id="generate">
          GENERATE 
          <svg class="arrow-right" width="8" height="8" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
            <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
          </svg> 
        </button>
      </div>
    </div>
  )
}

export default App
