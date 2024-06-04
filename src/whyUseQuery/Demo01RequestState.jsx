import React from "react";
import { useEffect } from "react";
import { doGetUsersError } from "../services";

const Demo01RequestState = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    setLoading(true);
    doGetUsersError()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Demo01RequestState;
