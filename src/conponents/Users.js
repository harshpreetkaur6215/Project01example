import React from "react";
import "./Users.css"; // CSS import

const Users = () => {
  const users = [
    { id: 1, name: "Ali", age: 22 },
    { id: 2, name: "Ahmed", age: 25 },
    { id: 3, name: "Sara", age: 20 },
    { id: 4, name: "Asad", age:24},
    { id: 5, name: "Harshpreet", age:23}
  ];

  return (
    <div className="users-container">
      <h2 className="title">User List</h2>
      <div className="cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <button className="btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
