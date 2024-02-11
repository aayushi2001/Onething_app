import React, { useState } from 'react';
import styles from './Accordian.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  const faqs = [
    {
      question: "Who's eligible for the Card?",
      answer: "If you're between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we'd encourage you to apply. However, your application will be declined if your location isn't serviceable or if your credit score is low.",
    },
    {
      question: "Is my location serviceable?",
      answer: "If you're between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we'd encourage you to apply. However, your application will be declined if your location isn't serviceable or if your credit score is low.",
    },
    {
      question: "What if I don't want to pay at all?",
      answer: "If you're between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we'd encourage you to apply. However, your application will be declined if your location isn't serviceable or if your credit score is low.",
    },
    {
      question: "What happens after I've build my card?",
      answer: "If you're between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we'd encourage you to apply. However, your application will be declined if your location isn't serviceable or if your credit score is low.",
    },

  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqAccordion}>
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span>{faq.question}</span>
            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
