import React from "react";
import { UserContext } from "./createcontext";
import Card from "./card";

function Withdraw(props) {
  const [show, setShow] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState("");
  const [status, setStatus] = React.useState("");

  const ctx = React.useContext(UserContext);

  function handleWithdraw() {
    if (!validateWithdraw(withdraw, "withdraw")) return;
    ctx.users[0].balance = Number(ctx.users[0].balance) - Number(withdraw);
    setShow(false);
  }

  function validateWithdraw(withdraw) {
    if (withdraw < 0) {
      setStatus(
        "Negativity not needed! Withdraw amount must be a number greater than 0 and we will do the subtracting."
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (ctx.users[0].balance - withdraw < 0) {
      setStatus(
        "Wait a second... We can't give you that much! Withdraw amount must be less than or equal to Balance."
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (ctx.users[0].balance - withdraw >= 0) {
      return true;
    } else
      setStatus(
        "If you want letters, head to your Post Office! Withdraw must be a number greater than 0."
      );
    setTimeout(() => setStatus(""), 3000);
    return false;
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="danger"
      header="WITHDRAW"
      status={status}
      body={
        show ? (
          <>
            Balance: {ctx.users[0].balance}
            <br />
            <br />
            Withdraw Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              disabled={withdraw === "" ? true : false}
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Withdraw Success</h5>
            New Balance: {ctx.users[0].balance}
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={clearForm}
            >
              New Withdraw
            </button>
          </>
        )
      }
    />
  );
}

export default Withdraw;
