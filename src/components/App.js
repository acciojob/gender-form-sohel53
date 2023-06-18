
import React, {useState} from "react";
import './../styles/App.css';
import { event } from "cypress/types/jquery";

const App = () => {
  let [gender, setGender] = useState("");

  const handlGenderChange = (event) => {
    setGender(event.target.value);
  }

  return (
    <div>
      <label>
        <h2>Select your gender:</h2>
        <input type="radio" value="Male" checked={gender=='Male'} onChange={handlGenderChange} />
        Male
      </label>
      <label>
        <input type="radio" value="Female" checked={gender=='Female'} onChange={handlGenderChange} />
        Female
      </label>
      {
        gender=='Male' && (
          <div>
            <h2>Select your shirt size</h2>
            <select>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        )
      }
      {
        gender=='Female' && (
          <div>
            <h2>Select your dress size</h2>
            <select>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </div>
        )
      }
        
    </div>
  )
}

export default App
