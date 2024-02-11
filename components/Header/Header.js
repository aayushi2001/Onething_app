import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    AFC Inc.
                </Link>
            </div>

            <nav className={styles.undrop}>
                <ul>
                    <li>
                        <Link href="/events">
                            Track Application
                        </Link>
                    </li>


                    <>
                        <li>
                            <Link href="/events/add">
                                Manage My Card
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/dashboard">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <button className={styles.button}>
                                Get Started
                            </button>
                        </li>
                    </>


                </ul>
            </nav>
            <nav className={styles.drop}>
                <ul className={isDropdownOpen ? styles.dropdownOpen : ''}>
                    <li>
                        <Link href="/events">
                            Track Application
                        </Link>
                    </li>

                    <>
                        <li>
                            <Link href="/events/add">
                                Manage My Card
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/dashboard">
                                FAQs
                            </Link>
                        </li>
                    </>
                </ul>
            </nav>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                {isDropdownOpen ? 'Close' : <img src="/images/menu.png" alt="Dagny" />}
            </button>
        </header>
    );
};

export default Navbar;