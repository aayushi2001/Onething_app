import Card from '@/components/Card/Card';
import styles from "./Form_Section.module.scss";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Form_Section = () => {
    return (
        <div className={styles.section}>
            {/* Displayed only in mobile view */}
            <div className={styles.mobileContent}>
                <h2>Create your own credit card in three easy steps</h2>
            </div>
            <div className={styles.form}>
                <div className={styles.inputs}>
                    <input type="text" id="input1" name="input1" value="Enter your phone number" />
                    <input type="text" id="input2" name="input2" value="Enter your PAN number" />
                    <input type="text" id="input3" name="input3" value="Enter your Address" />
                </div>
            </div>
            <div className={styles.content}>
                <Card
                    icon="/images/insurance.jpg"
                    heading="Fill Eligibility Form"
                    paragraph="Tell us about yourself, to find out if you're eligible to apply."
                />
            </div>
            <div className={styles.mobileContent}>
                <Card
                    icon="/images/insurance.jpg"
                    heading="Fill Eligibility Form"
                    paragraph="Please fill an application form to make sure you're eligible for the card. You can fill this later as well"
                />
                <Link href="/" className={styles.mobileContentbutton}>
                    Get Started
                </Link>&emsp;<FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>

    );
};

export default Form_Section;