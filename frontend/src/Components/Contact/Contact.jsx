import { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

const Contact = () => {


    const form = useRef();
    const formsubmit = (e) => {

        e.preventDefault();

        emailjs
            .sendForm(
                "service_9oshjjm",
                "template_cm6in7h",  // replace with your EmailJS Template ID
                form.current,
                "Z9y77GDkogGcp097T"    // replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error(error.text);
                    alert("Oops! Something went wrong.");
                }
            );
        e.target.reset();
    };


    return (

        <>
            <h1 className="d-flex justify-content-center mt-5" id='Contact'>Contact Us</h1>
            <div className="d-flex justify-content-center contact-form p-5 " >
                <form ref={form} onSubmit={formsubmit}>

                    <input type="text " name='From_name' placeholder="Your Name" className="p-2 w-100 m-3" />
                    <br />
                    <input type="email" name='User_email' placeholder="Your Email" className="p-2 w-100 m-3" />
                    <br />
                    <textarea placeholder="Your Message" name='message' rows={8} cols={70} className="p-2 w-100 m-3" />
                    <br />
                    <div className='d-flex justify-content-center p-3'>
                        <button type='submit' className='btn btn-info ' >Send Message</button>
                    </div>
                </form>
            </div>
            <div className='d-flex justify-content-center p-3 fs-1 socialmedia' >
                {/* <h3>Connect with us</h3> */}
                <a href='https://www.instagram.com/san_sanjay2003/' target='_blank'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://www.linkedin.com/in/sanjay-ram-28dec2003/' target='_blank'>
                <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href='https://github.com/sanjayramu28 ' target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </>
    )
}

export default Contact;