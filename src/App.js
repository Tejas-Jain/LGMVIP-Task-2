import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './component/User'

function App() {
  const [users, setUsers] = useState([])

  const getAll = async ()=>{
    const raw = await fetch('https://reqres.in/api/users?page=1')
    const rawData = await raw.json()
    setUsers(rawData.data);
    // console.log(users)
  }

  return (
    <div className="App">
      <nav className="nav">
        <h1 display="inline">My Company</h1>
        <button onClick={getAll}>Get Users</button>
      </nav>

      <table>
        <tr>
          <th>ID</th>
          <th>E-Mail</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Profile Picture</th>
        </tr>
        {users.map((element) => {
          return <User arg={element}  key={element.id}/>
        })}

      </table>
    </div>
  );
}

export default App;
