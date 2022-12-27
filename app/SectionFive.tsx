import React from 'react';
import { cardData } from '../components/CardData';
import Card from './Card';
import styles from './sectionFive.module.css';

const SectionFive = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
              <h1>Upcoming Events</h1>
              <hr />
        <div className={styles.events}>
          {cardData.map((item, index) => {
            return (
              <Card
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
