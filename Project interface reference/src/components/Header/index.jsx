import React from 'react'
import styles from './Header.module.scss';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <>
        <header>
        <div class={styles.menu1}>
            <a href="#" class={styles.logo}>
                <img src="./IMG/logo.png" alt="logo" class={styles.logoPic} />
            </a>
            <div class={styles.pay}>
                <span class={styles.wallet}>0,00 €</span>
                <button class={styles.cart}>
                    <img src="./IMG/carticon.svg" alt="cart icon" class={styles.cartIco} />
                    <span class={styles.cartNum}>0</span>
                </button>
                <Avatar src={AccountCircleIcon}/>
            </div>
        </div>
        <div class={styles.menu2}>
            <span>Shop by category</span>
            <div class={styles.userBtns}>
                <span>Order Status</span>
                <span>Wishlist</span>
                {/* <span>Sign In/Join</span> */}
            </div>
        </div>
    </header>
        </>
    )
}

export default Header
