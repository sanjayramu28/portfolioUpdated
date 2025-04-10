import React from 'react'
// import {link } from '../../assets/link.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
const Hero = () => {
    return (
        <>
            <div className='text-white' id='Home'>

                <div className='hero-img p-5'>
                    <img src='https://files.oaiusercontent.com/file-XCJjxdzXyWMZdm1Us1gMB7?se=2025-04-07T14%3A21%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc011a0de-25f2-4a60-9004-eea4a0e67694.webp&sig=ViC7qAljxcyupY9GvhLkApDG%2BWL6zQfMKzfUm3agYk4%3D' />
                </div>
                <div className='d-flex text-white justify-content-center'>

                    <h2>Hi ! I'm Sanjay , &nbsp;</h2>
                    <h2 className="glow-animate">
                        <Typewriter
                            words={[
                                'React Fanatic ⚛️',
                                'Full Stack Explorer 💻',
                                'Code & Coffee Addict ☕',
                                'Backend Wrangler 🔧',
                                'Frontend Artist 🎨'
                            ]}

                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                </div>
                <p className='d-flex justify-content-center fs-5' style={{ textWrap: "wrap" }}>I built mindblowing websites with style, soul and speed</p>
                <div className=' d-flex justify-content-center'>
                    <a href="/Sanjay.pdf" download className="btn btn-primary">Download Resume &nbsp;<FontAwesomeIcon icon={faDownload} /></a>

                </div>

            </div>

            {/* <p>Header</p> */}
        </>
    )
}


export default Hero