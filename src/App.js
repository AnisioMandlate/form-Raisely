import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://api.raisely.com/v3/signup", {
        campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      })
      .then((message) => {
        alert(message);
      })
      .catch((err) => {
        if (err?.response?.status === 400) {
          alert("This user already exist!");
        }
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>Sign Up</h2>
          </legend>
          <div className="field-group">
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="fisrtName"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
