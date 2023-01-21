import React ,{useEffect,useState}from "react";
import './Nav.css';


function Nav(){
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        const scrollBar = event=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        };
        window.addEventListener("scroll",scrollBar);
        return () => {
            window.removeEventListener("scroll",scrollBar);
        };
    },[]);
    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav