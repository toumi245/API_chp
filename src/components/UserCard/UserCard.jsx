import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './userCard.css'
import { Link } from "react-router-dom";
const UserCard=({user})=>{
    return(
        <div>
          <Link to={`/userdetails/${user.id}`}>
      <Card className="userCard" >
      <Card.Header>Name :{user.name +" "+user.username}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Email :{user.email}</ListGroup.Item>
        <ListGroup.Item>Phone :{user.phone}</ListGroup.Item>
        <ListGroup.Item>City :{user.address.city}</ListGroup.Item>
        <ListGroup.Item>Company :{user.company.name}</ListGroup.Item>
        <ListGroup.Item>WebSite :{user.website}</ListGroup.Item>
      </ListGroup>
    </Card>
    </Link>
        </div>
    )
}
export default UserCard