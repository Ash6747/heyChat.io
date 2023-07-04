import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="navbar">
            <span className="logo">HeyChat</span>
            <div className="user">
                <div className="imgContainer" >
                    <img src={currentUser.photoURL} alt="" />
                    <span></span>
                </div>
                <span className="userName">{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
            
            
        </div>
    )
}

export default Navbar;