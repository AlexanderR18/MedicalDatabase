
import React, {useState,useEffect} from "react";
//import './App.css';
import Axios from "axios"
//import LoginPage from "./Login";
import "./Login.css";
function App() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setList(response.data);
    })
  })

  const sumbitinfo = () => {
    Axios.post("http://localhost:3001/api/insert", 
    {username:username,password:password}).then(() => {
      alert("successful insert");
    });
  };


////
  //Add Logins for Admin and Regular Users
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {

    if (username === 'JohnDoe' && password === 'Password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };
////

  function LogIn()
  {
    handleLogin();
    sumbitinfo();
  }

  
  return (
    <div className="App">
        
        <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {username}!!</p>




          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Medical Database</h1>
          <h2>Login Page</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick= {LogIn} >Login</button>
          

        

          
        </div>
      )}

      </div>

    </div>
    
  );
}

export default App;







/*
{userList.map((val) =>{
  return <p>username: {val.username} | password: {val.password}</p>
})}
<div className="form">
      <h1>Medical Database</h1>

        <label>Username:</label>
        <input type="text" name="username" onChange= {(e) => 
        {setUsername(e.target.value);
        }}
        />
        <label>Password:</label>

        <input type="password" name="password" onChange= {(e) => 
        {setPassword(e.target.value);
        }}
        /> 

        <button onClick={sumbitinfo}>Submit</button>
        {userList.map((val) =>{
          return <h1>username: {val.username} | password: {val.password}</h1>
        })}



        
      </div>
*/