import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
        contact: ''
    })
    const handleInputChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
        console.log(formData)
    }
    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://9d0t51qr2m.execute-api.us-east-2.amazonaws.com/Stage/contact-HelloWorldFunction-p1kRjNLaBiK9`, { formData })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <form className={styles.form}>
                    <div>
                        <input type="text" className={styles.input} id="name" name="name" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" className={styles.input} id="email" name="email" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" className={styles.input} id="contact" name="contact" onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" className={styles.input} id="subject" name="subject" onChange={handleInputChange} />
                    </div>
                    <div className={styles.textarea}>
                        <textarea rows="4" type="text" className={styles.textarea_input} id="message" name="message" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="send-message">
                        <a className={styles.about_button} stylehref="#" role="button" onClick={handleSubmit}>
                            <span>view more</span>

                        </a>
                    </div>
                </form>

            </main>
        </div>
    )


}