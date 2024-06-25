import React from "react";
import { UserContext } from "./createcontext";
import Card from "./card";

function Login() {
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  const handleInput = (event) => {
    for (let i = 0; i < ctx.users.length; i++) {
      if (
        username === ctx.users[i].email &&
        userPassword === ctx.users[i].password
      ) {
        setShow(false);
      } else {
        setStatus(
          "Either your username or password are incorrect. Think carefully and give it another try."
        );
        setTimeout(() => setStatus(""), 3000);
      }
    }
  };

  function clearForm() {
    setUsername("");
    setUserPassword("");
    setStatus("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="LOGIN"
      body={
        show ? (
          <>
            <div>
              User Name (Email)
              <br />
              <input
                className="form-control"
                value={username}
                name="username"
                placeholder="Enter User Name or Email"
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                className="form-control"
                value={userPassword}
                name="userPassword"
                placeholder="Enter Password"
                onChange={(e) => setUserPassword(e.currentTarget.value)}
              />
              <br />
              <button
                disabled={username === "" || userPassword === "" ? true : false}
                type="submit"
                className="btn btn-light  mx-auto d-block"
                onClick={handleInput}
              >
                Log On{" "}
              </button>
              <br />
              <p>{status}</p>
            </div>
          </>
        ) : (
          <>
            <h5>Login Success</h5>
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={clearForm}
            >
              Log Out
            </button>
          </>
        )
      }
    />
  );
}

export default Login;
