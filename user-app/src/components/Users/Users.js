
import React, { useState, useEffect } from 'react';
import User from '../User/User'
import './Users.scss'

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users.length < 1 || users === undefined) {
      return;
    }
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [users]);


  return (
    <div className="users-list">
      <h1>Here is a list of Users</h1>
      {isLoading && "loading users.."}
      <div className="users_list__container">
        {users.map(user => {
          return (
            <User key={user.id} user={user} />
          )
        })
        }
      </div>
    </div>
  )
}
export default Users;