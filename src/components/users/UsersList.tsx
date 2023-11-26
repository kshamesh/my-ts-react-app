import { useState, useEffect } from "react";

export const UsersList = () => {
  const [users, setUsers] = useState<String[]>([]);
  const [error, setError] = useState<String>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: String }) => user.name)))
      .catch((error) => setError("Error fetching the users"));
  });

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users?.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
};
