import React from 'react';

//styles
import styles from "./Navbar.module.css";

const Navbar = ({logOutHandler}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>Magram</h2>
            <div className={styles.logOut} onClick={logOutHandler}>Log out</div>
        </div>
    );
};

export default Navbar;