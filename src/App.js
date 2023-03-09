import axios from 'axios';
import Home from "./Pages/Home/Home.jsx"
import React,{useEffect, useState} from 'react';
import UserDetails from './Pages/Home/UserDetails/UserDetails.jsx';
import { Routes ,Route} from 'react-router-dom';
function App() {
  const [users,setUsers]=useState([])
  const [loadUsers,setLoadUsers]=useState(true)
  const getUsers=()=>{
    axios.get("http://jsonplaceholder.typicode.com/users")
    .then(res=>{
      setUsers(res.data)
      setLoadUsers(false)}
  )
  
}
  getUsers()
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home users={users} loadUsers={loadUsers}/>}/>
        <Route path='/userdetails/:id' element={<UserDetails />}/>
       
      </Routes>
      

      
    </div>
  );
}

export default App;
