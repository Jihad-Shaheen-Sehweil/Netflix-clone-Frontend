import React, { useState, useEffect }  from "react";
import "../css/Navbar.css";


function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
    }, [])    
    return (
        <nav className={`nav ${show && "nav_black"} `}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar img"
            />
        </nav>
    );
}

export default Navbar;
