import React from "react";
import UserCard from '../UserCard/UserCard'
import './usersList.css'
import { Spinner } from "react-bootstrap";
const UsersList=({users,loadUsers})=>{
    return(
        <div>
           { loadUsers ? (
            <>
            <h1>Loading</h1>
            <Spinner animation="border" variant="primary" />
            </>
           ):(users.map((el)=><UserCard user={el} key={el.id}/>))} 
        </div>
    )
}
export default UsersList