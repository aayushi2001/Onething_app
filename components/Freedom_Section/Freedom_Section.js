import Link from 'next/link';
import styles from "./Freedom_Section.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Freedom_Section = () => {
    return (
        <div className={styles.section}>

            <div className={styles.heading}>
                <h1>The Freedom to Create<br />The Credit Card You Want</h1>
            </div>
            <div className={styles.content}>
                <p>
                    That's why it comes with benefits & rewards chosen by you.<br />
                    Available in multiple designs, your card comes in a style selected by<br />
                    you. You can come back each year, to edit your benefits or update<br />
                    your style.
                </p>
                <p>
                    Your OneSync Credit Card stays true to you, year after year. It's the <br />
                    only card you'll ever need.
                </p>
                <Link href="/" className={styles.button}>
                    Get Started
                </Link>&emsp;<FontAwesomeIcon icon={faChevronRight} />
            </div>

            {/* Displayed only in mobile view */}
            <div className={styles.mobileContent}>
                <p className={styles.mobileContentOne}>Build your own Credit Card that fits in your day to day lifestyle. First, choose your rewards and then select your card design.</p>
                <p className={styles.mobileContentTwo}>Check if the card is available in your city</p>
                <div className={styles.mobilebutton}>                <select className={styles.dropdown}>
                    <option value="option1">Select City</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>&emsp;
                <button className={styles.gobutton}>
                    Go
                </button>
                </div>

            </div>

        </div>
    );
}

export default Freedom_Section;