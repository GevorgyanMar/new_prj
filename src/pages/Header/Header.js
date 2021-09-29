import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { routing } from "../../routing/routing";
import './navbar.css';
import UserInfo from "../userInfo/userInfo";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [show, setShow] = useState(false);

    return (
        <>
            <header className="header-block">
                <div className='navbar'>
                    <div onClick={showSidebar} className="open-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <span className="close-icon">X</span>
                        {routing.map((item, index) => {
                            return (
                                <li key={index} className="menu-item">
                                    <Link to={item.path}
                                    > {item.name}</Link>
                                    {item.childern ? item.childern.map((elem, index) => {
                                        return (
                                            <ul className="drop-down" key={index} >
                                                <div className="sube-menu">
                                                    <li><Link to={elem.path}> {elem.name}</Link></li>
                                                </div>

                                            </ul>


                                        )
                                    }) : ""}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div><UserInfo /></div>
            </header>
        </>
    );

}
export default Header;


//onClick={setShow(false)}  onMouseLive={(false)}