


import Client from "../../models/client";

import styles from "../../scss/navbar/navbar.module.scss"
import Logo from "./logo";
import ProfileIcon from "./profileIcon";


function Navbar() {


    return (
        <nav className={ styles.nav } >
            <Logo />

            <div className={ styles.navigator }>

                <div className={ styles.icon }>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="36" cy="36" r="30" strokeWidth="4"/>
                <path d="M76 76L57.5 58" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                </div>

                <div className={ styles.icon }>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.3889 20.8572C13.0247 22.372 10.8967 22.3899 9.51953 20.8572" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>

                <ProfileIcon />
            </div>
        </nav>
    )
}


export default Navbar; 




