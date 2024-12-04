import React, { useRef, useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = (e) => {
    const form = useRef();  // Create a ref to access the form

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_378qzts', 'template_ibrff2k', form.current, { publicKey: 'i0OoJBV2WDf936Q7b', })
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome" id='Contact'>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    {/* <div className="blur s-blur" style={{ background: "#594d46" }}>
                    </div> */}
                </div>
            </div>


            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="Text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for your feedback"}</span>
                    {/* <div
                        className="blur c-blur"
                        style={{ background: "var(--purple)" }}>
                    </div> */}
                </form>
            </div>




        </div>



    )
}

export default Contact