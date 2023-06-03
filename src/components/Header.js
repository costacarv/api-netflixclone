import React from "react";
import './Header.css';

export default function Header ({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                        <div className="image"></div>
                </a>
            </div>
        <div className="header--user">
            <a href="/">
                <div></div>
            </a>
        </div>
        </header>
    )
}
