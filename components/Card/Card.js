import styles from "./Card.module.scss";

const Card = ({ icon, heading, paragraph }) => {
  return (
    <>
      <div className={styles.card}>
        <span ><img src={icon} /></span>
        <h2 >{heading}</h2>
        <p >{paragraph}</p>
      </div>

    </>
  );
};

export default Card;