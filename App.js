import React ,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import './App.css';
import UsersList from './Components/Users/UsersList';


const App = () => {
  const[usersList,setUsersList] = useState([]);//used for lifting the state up
  const addUserHandler =(uName,uAge) =>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,
        {name:uName , age:uAge ,id:Math.random().toString()},];
      });
  };
  return (
    <div>
         <AddUser onAddUser={addUserHandler}/>{/*addUserHandler function is called on
          button click in addUser.js  because onAddUser function is called in
           addUserHandler function*/}
          <UsersList users={usersList}/>
    </div>
        

  );
};

export default App;
