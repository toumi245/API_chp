import React from "react";
import{Button, Card,ListGroup} from 'react-bootstrap'
const OneUser=({loadDetails,userDetails})=>{
    console.log(userDetails)
    return(
        <div>
                <>
                {loadDetails ? (
                  <h1>loading</h1>
                ):(
                  <Card style={{height:"80vh",margin:"auto"}} >
      <Card.Header>Name :{userDetails.name +" "+userDetails.username}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Email :{userDetails.email}</ListGroup.Item>
        <ListGroup.Item>Phone :{userDetails.phone}</ListGroup.Item>
        <ListGroup.Item>City :{userDetails.address.city}</ListGroup.Item>
        <ListGroup.Item>Company :{userDetails.company.name}</ListGroup.Item>
        <ListGroup.Item>WebSite :{userDetails.website}</ListGroup.Item>
      </ListGroup>
      <Button>Post</Button>
    </Card>
                )}
                </>
        </div>
    )
}
export default OneUser