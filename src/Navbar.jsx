import React from 'react'
import styles from './Navbar.module.css'
import logo from "./assets/logo.svg"

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.logo}><img src={logo}/><h4>Geeks Foods</h4></div>
        <div className={styles.options}>
            <ul><li>Home</li>
            <li>Quote</li>
            <li>Resttutant</li>
            <li>Foods</li>
            <li>Conatct</li>

            </ul>
        </div>
        <div className={styles.button}>
            <button>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Navbar