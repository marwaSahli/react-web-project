import React from "react";

interface User {
  id: string;
  name: string;
  email: string;
}
const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await response.json();

  return (
    <div>
      <>
        <h1>Users</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody></tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      </>
    </div>
  );
};

export default UsersPage;
