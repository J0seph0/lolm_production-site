import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import './NavBar.module.css'
import { Button } from './Button';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    useEffect( () => {
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
});

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link href="/" className = "navbar-logo">
                    RGM 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link href='/' className='nav-links' onclick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/services' className='nav-links' onclick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/products' className='nav-links' onclick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/sign-up' className='nav-links-mobile' onclick={closeMobileMenu}>
                            Sign-Up
                        </Link>
                    </li>
                </ul>
                {Button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        
    </>
  )
}

export default NavBar