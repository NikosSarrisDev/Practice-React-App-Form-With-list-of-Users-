import './index.css'
import './Components/Users/AddUsers';
import React , {useState} from 'react';
import { AddUsers } from './Components/Users/AddUsers';
import { UserList } from './Components/Users/UserList';

function App() {
  const [usersList , setUsersList] = useState([]);


    const addUserHandler = (uName , uAge) => {
      setUsersList((prevUsersList) => {
        return [...prevUsersList, {name: uName , age : uAge , id : Math.random().toString()}]
      })
    }
  return (//Here we rendering the AddUsers Component and below rendering the UsersList
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
