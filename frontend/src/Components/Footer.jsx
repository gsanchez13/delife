import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="text-black my-auto py-1 px-5" style={{ "backgroundColor": "#EFDDD0" }}>
                <div className="d-flex bd-highlight mb-1 px-1 mx-5">
                    <a href="/about" target="_top" className="mr-3 no-decoration p-2 bd-highlight" style={{ "color": "black" }}> About Us</a>
                    <a href="/contact" target="_top" className="mr-3 no-decoration p-2 bd-highlight" style={{ "color": "black" }}>Contact Us</a>
                    <p className="ml-auto p-2 bd-highlight">
                        Follow Us:
          <a href="https://www.instagram.com/shopvidaveloz/" target="_blank" rel="noopener noreferrer"> {" "}
                            <AiFillInstagram style={{ "color": "black" }} size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
                            <AiFillLinkedin style={{ "color": "black" }} size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
                            <AiOutlineTwitter style={{ "color": "black" }} size={20} />
                        </a>
                    </p>
                    <br />
                    <br />
                </div>
                <p className="d-flex mx-5 px-1"> © Vida Veloz LLC 2020</p>
            </div>
            </footer>
    )
};
export default Footer;