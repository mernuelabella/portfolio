import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router"
import './Footer.css'

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

export function Footer() {
    const {width} = useScreenSize();
    const isMobile = width > 750;

    return (
        <div className="footer">
            <div className="page-width">
                <div className="footer__inner">
                    <div className="footer__logo-text montserrat-semibold">
                        <Link to="/">Mernuel Abella</Link>
                    </div>
                    <div className="footer__links">
                        {isMobile ? (
                            <ul>
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