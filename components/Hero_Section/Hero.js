import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Build a Credit Card<br />That is Definitely Yours</h1><br />
                <p className={styles.contentTwo}>
                    With the OneSync Credit Card you can customise your card the way you want
                </p><br />
                <button className={styles.button}>
                    Get Started
                </button>
            </div>
            <div className={styles.image}>
                <Image src="/images/gif.jpg" alt="Dagny" width={300} height={300} />
            </div>

        </div>
    );
}

export default Hero;