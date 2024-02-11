import Card from '@/components/Card/Card';
import styles from "./Style_Section.module.scss";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Style_Section = () => {
    const images = [
        { image: '/images/gray.png', alt: 'Slide 1' },
        { image: '/images/gray.png', alt: 'Slide 2' },
        { image: '/images/gray.png', alt: 'Slide 3' },
        { image: '/images/gray.png', alt: 'Slide 4' },
    ];
    const autoplayDelay = 3000;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: autoplayDelay,
    };
    return (

        <div className={styles.section}>
            <div className={styles.slideshow}>
                <Slider {...settings}>
                    {images.map((slide, index) => (
                        <div key={index} className={styles.slideImage}>
                            <img src={slide.image} alt={slide.alt} />
                        </div>
                    ))}
                </Slider>
                <div className={styles.fourCards}>
                    <img src="/images/Rectangle1.png" alt="Dagny" />
                    <img src="/images/Rectangle2.png" alt="Dagny" />
                    <img src="/images/Rectangle3.png" alt="Dagny" />
                    <img src="/images/Rectangle4.png" alt="Dagny" />
                </div>
            </div>
            <div className={styles.content}>
                <Card
                    icon="/images/paint-roller.png"
                    heading="Select Your Style"
                    paragraph="Match your card to your personality. Whether you like a minimal look or something that catches everyone’s eyes, we’ve got a style for you. You can update your style every year, for a small fee "
                />
            </div>
            <div className={styles.mobileContent}>
                <Card
                    icon=""
                    heading="Select Your Style"
                    paragraph="Whether you like a minimal look or something that catches everyone's eyes.We have a Card design for you"
                />
                <Link href="/"
                    className={styles.mobileContentbutton}

                >
                    Get Started
                </Link>&emsp;<FontAwesomeIcon icon={faChevronRight} />
                <div className={styles.extrasection}>
                    <h3>Why the OneSync Card is the Best Choice for you?</h3>
                    <p>You can create a Credit Card that fits all your needs on your own. Gone are the days when you had choose from premade credit cards with features that you did not need. </p>
                    <p>With the OneSync card you can save on all the things that you love to do with a unique personal touch</p>
                    <Link href="/"
                        className={styles.mobileContentbutton}

                    >
                        Get Started
                    </Link>&emsp;<FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

        </div>
    );
};

export default Style_Section;