import React from "react";
import { UserContext } from "./createcontext";
import Card from "./card";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus(
        "Just a second... " + label + " field must be completed please"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(password) {
    if (password.length < 8) {
      setStatus(
        "Even though this is a Bad Bank, we try to be safe, so your Password must be 8 or more characters please"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  const firebaseConfig = {
    apiKey: "AIzaSyAzgqUWMGJpv_KWfWhhlEbNsCi-eaC3PRk",
    authDomain: "gregory-shaw-banking-app.firebaseapp.com",
    projectId: "gregory-shaw-banking-app",
    storageBucket: "gregory-shaw-banking-app.appspot.com",
    messagingSenderId: "637460095620",
    appId: "1:637460095620:web:a5c6e0a44d952468d218d1"
  };
//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
firebase.initializeApp(firebaseConfig);

  const handleCreate = (e) => {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validatePassword(password, "password")) return;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user.email)
    setShow(false);
  })
  .catch((error) => {
    console.log(e.message)
    //setErr(e.message)
    setStatus("Error: " + e.message)
    setEmail('')
    setPassword('')
  });
}

  // function handleCreate() {
  //   if (!validate(name, "name")) return;
  //   if (!validate(email, "email")) return;
  //   if (!validatePassword(password, "password")) return;
  //   ctx.users.push({ name, email, password, balance: 100 });
  //   setShow(false);
  // }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="CREATE ACCOUNT"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="input"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              disabled={
                name === "" && email === "" && password === "" ? true : false
              }
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={handleCreate}
            >
              Create Account
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
