import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router"
import './Header.css'

function useScreenSize() {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
}

export function Header() {
    const {width} = useScreenSize();
    const isMobile = width > 750;

    return (
        <div className="header">
            <div className="page-width">
                <div className="header__inner">
                    <div className="header__logo-text montserrat-semibold">
                        <Link to="/">Mernuel Abella</Link>
                    </div>
                    <div className="header__links">
                        {isMobile ? (
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/work">Work</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        ) : (
                            <div>Test</div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}