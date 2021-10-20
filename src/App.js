import React, { useState } from "react";
import './index.css';


function App() {
  const [users, setUsers] = useState();
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?"); //fetches api
    const info = await response.json();
    setUsers(info.data);
  };
  return (
    <div>
      
      <nav className="navbar"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" width="25" alt="" /><a href="https://www.linkedin.com/" >LinkedIn</a> &nbsp;&nbsp;</nav>
      <div className="App">
        <div className="one">
          <h1>USER DETAILS FROM LinkedIn</h1>
          <button className="btn" onClick={loadUsers}>GET USERS</button>
        </div>
        <div className="two row">
          {users?.map((login, id) => {
          return (
            
            <div className="column">
              <div className="three" key={id}>
                <img src={login.avatar} className="image" alt="..." />
                  <div className="four">
                    <h2>{login.first_name} {login.last_name}</h2>
                    <h3>{login.email}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;