import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';



export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 1150) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" ooClick={closeMobileMenu}>
                        BARBER WORLD <i className="fa-brands fa-slack" />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Strona główna
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Usługi
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Produkty
                            </Link>
                        </li>
                        <li >
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Zapisz się
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Zapisz się</Button>}
                </div>

            </nav>
        </>
    )
}
