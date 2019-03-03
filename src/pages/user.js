import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";
export default withRouteData(({ users }) => (
  <div>
    <h1>Users</h1>
    <br />

    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/user/${user.id}/`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
));
