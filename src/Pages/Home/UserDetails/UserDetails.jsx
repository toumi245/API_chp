import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./userDetails.css"
import OneUser from "../../../components/OneUser.jsx/OneUser";
const UserDetails=()=>{
    const {id}=useParams();
    const [userDetails,setUserDetails]=useState({});
    const [loadDetails,setLoadDetails]=useState(true)
    console.log(id)
    const getUserDetails=()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{setUserDetails(res.data)
         setLoadDetails(false)
    })
     
    }
    const getUserPost=()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/Post`).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getUserDetails()
        getUserPost()
    },[])
    return(
        <div className="userDetailsDiv">
            <OneUser userDetails={userDetails} loadDetails={loadDetails}/>
        </div>
    )
}
export default UserDetails