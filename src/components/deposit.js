import React from "react";
import Card from "./card";
import { UserContext } from "./createcontext";

function Deposit() {
  const [show, setShow] = React.useState(true);
  const [deposit, setDeposit] = React.useState("");
  const [status, setStatus] = React.useState("");

  const ctx = React.useContext(UserContext);

  function validateDeposit(deposit) {
    if (deposit <= 0) {
      setStatus(
        "Don't be so negative! Your deposit amount must be greater than 0. To withdraw money, please select the 'Withdraw' menu option"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (deposit > 0) {
      return true;
    }
    setStatus(
      "Your deposit must be a number greater than 0. No letters please as they are really tough to add..."
    );
    setTimeout(() => setStatus(""), 3000);
    return false;
  }

  function handleDeposit() {
    if (!validateDeposit(deposit, "deposit")) return;
    ctx.users[0].balance = Number(ctx.users[0].balance) + Number(deposit);
    setShow(false);
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="DEPOSIT"
      title="GREG"
      text="GREAT"
      status={status}
      body={
        show ? (
          <>
            Balance: {ctx.users[0].balance}
            <br />
            <br />
            Deposit Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Deposit Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light mx-auto d-block"
              disabled={deposit === "" ? true : false}
              onClick={handleDeposit}
            >
              Deposit
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Deposit Success</h5>
            New Balance: {ctx.users[0].balance}
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-light mx-auto d-block"
              onClick={clearForm}
            >
              New Deposit
            </button>
          </>
        )
      }
    />
  );
}

export default Deposit;
