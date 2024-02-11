import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <h2 >OneSync Credit Card</h2>
                    <p>Experience Freedom</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Get Started</button>

                    </div>
                </div>

                <div className={styles.subContent}>

                    <ul>
                        <li>Manage Your Card</li>
                        <li>Track Your Application</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Manage Your Card</li>
                        <li>Track Your Application</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Manage Your Card</li>
                        <li>Track Your Application</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Manage Your Card</li>
                        <li>Track Your Application</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;