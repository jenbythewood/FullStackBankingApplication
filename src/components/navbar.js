import React from "react";
//import "../App.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Home Sweet Home"
        >
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="btn btn-outline-primary"
                type="button"
                aria-current="page"
                href="#/createaccount/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Want to join us? Here is where you can create a new account."
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-outline-secondary"
                type="button"
                aria-current="page"
                href="#/login/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="This is where you log in if you are an existing customer. Easy Peasy."
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-outline-success"
                type="button"
                aria-current="page"
                href="#/deposit/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Want to add $ to your account? Click here."
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-outline-danger"
                type="button"
                aria-current="page"
                href="#/withdraw/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Need $ from your account? Click here."
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-outline-info"
                type="button"
                aria-current="page"
                href="#/alldata/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Check out all the Bank Bank's customer details, but please don't tell anyone..."
              >
                All Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
