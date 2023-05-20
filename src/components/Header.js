import React from "react";
import './Header.css';

export default function Header ({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="/images/logotipo-da-netflix" alt="netflix"></img>
                </a>
            </div>
        <div className="header--user">
            <a href="/">
                <img src="https://pbs.twing.com/profile_images" alt="usuario"></img>
            </a>
        </div>
        </header>
    )
}
