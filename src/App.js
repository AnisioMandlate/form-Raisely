import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field-group">
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="fisrtName" />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
