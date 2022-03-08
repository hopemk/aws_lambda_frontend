import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import axios from 'axios';
export default function () {
    const [messages, setMessages] = useState([])
    const getMessages = () => {
        axios.get(`https://djiyyv2szc.execute-api.us-east-2.amazonaws.com/Staging`)
            .then(res => {
                const data = res.data
                
                setMessages( data );
            })
        console.log(messages instanceof Array)
    }
    useEffect(() => {
        getMessages();
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <div className={styles.grid}>
                    {
                        messages.map((item, index) => {
                            return (
                            <a href="https://nextjs.org/docs" className={styles.card}>
                                <h2>Sent: {item.createdAt} &rarr;</h2>
                                <p>Email: {item.email} Contact: {item.contact}</p>
                                <p>{item.message}</p>
                            </a>
                            )
                        })
                    }

                </div>
            </main>
        </div>
    )
}