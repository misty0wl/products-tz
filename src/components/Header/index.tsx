// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logo}>
                    Product App
                </NavLink>
                <nav className={styles.nav}>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/create-product"
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                        }
                    >
                        Create Product
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;