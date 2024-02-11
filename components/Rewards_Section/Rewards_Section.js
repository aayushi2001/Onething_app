import Card from '@/components/Card/Card';
import styles from "./Rewards_Section.module.scss";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Rewards_Section = () => {
    const images = [
        { image: '/images/offer.png', alt: 'Slide 1' },
        { image: '/images/1stoffer.png', alt: 'Slide 2' },
        { image: '/images/offer.png', alt: 'Slide 3' },
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
            <div className={styles.content}>
                <Card
                    icon="/images/networking.png"
                    heading="Choose Your Rewards"
                    paragraph="Match your card to your lifestyle. We've got benefits from across brands & categories for you to choose from. Each benefit has an attached fee. Just add the ones you like to your card."
                />
            </div>
            <div className={styles.mobileContent}>
                <Card
                    icon=""
                    heading="Choose Your Rewards"
                    paragraph="Choose rewards from brands and categories that fit in with your personality.Your card's annual fee will based on the rewards you select."
                />
                <Link href="/"
                    className={styles.mobileContentbutton}

                >
                    Get Started
                </Link>&emsp;<FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className={styles.slideshow}>
                <Slider {...settings}>
                    {images.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.image} alt={slide.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default Rewards_Section;