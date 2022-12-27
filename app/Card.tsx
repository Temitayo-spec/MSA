import Image from 'next/image';
import React from 'react';
import styles from './card.module.css';
import { BsArrowRight } from 'react-icons/bs';

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Card = ({ src, alt, title, description }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Image src={src} height={500} width={500} alt={alt} />
        <div className={styles.texts}>
          <h2>{title}</h2>
        <p>{description}</p>
        <button type='button'>
          Learn More{' '}
          <span>
            <BsArrowRight className={styles.arrow} />
          </span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
