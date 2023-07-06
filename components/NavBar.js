import React, {useState} from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'


function NavBar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link href="/" className = "navbar-logo">
                    RGM 
                </Link>
            </div>
        </nav>
        
    </>
  )
}

export default NavBar