import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
export default function(){
    const [messages, setMessages] = useState(0)
    const getMessages = () =>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
           const data = res.data
          setMessages({ data });
        })
    }
    useEffect(() => {
        getMessages();
    })
    return "data"
    
}