import React from "react";
import { UserContext } from "./createcontext";
import Card from "./card";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="secondary"
      header="ALL DATA"
      body={
        <>
          <p>Bad Bank user data shown below:</p>

          <div className="table-responsive">
            <table className="card-table table">
              <thead className="table-info">
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {ctx.users.map((item) => {
                  return (
                    <tr key={item.password}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      }
    />
  );
}

export default AllData;
