import Image from 'next/image';
import React from 'react';
import { excoData, facultyData, orientationData } from '../../components/GalleryData';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>Gallery</h1>
        </header>
        <div className={styles.content}>
          <div className={styles.faculty__gallery}>
            <h1>Faculty of Management Sciences</h1>
            <p>
              “Everything has beauty, but not everyone sees it.” - Confucius
            </p>
            <div className={styles.gallery__ctn}>
              {facultyData.map((item, index) => {
                return (
                  <div className={styles.gallery__img} key={index}>
                    <Image
                      src={item.src}
                      alt="images"
                      height={500}
                      width={400}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.exco__gallery}>
            <h1>MSA Excos Inauguration Day</h1>
            <p>
              “Leadership is the capacity to translate vision into reality.”
              —Warren Bennis
            </p>
            <div className={styles.gallery__ctn}>
              {excoData.map((item, index) => {
                return (
                  <div className={styles.gallery__img} key={index}>
                    <Image
                      src={item.src}
                      alt="images"
                      height={500}
                      width={400}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.exco__gallery}>
            <h1>MSA Orientation Day</h1>
            <p>
              “Orientation is the process of acclimatizing freshers to the new
              environment and the new culture of the university. It is a process
              of familiarizing the freshers with the university and its
              environment.” — Dr. A. K. Singh
            </p>
            <div className={styles.gallery__ctn}>
              {orientationData.map((item, index) => {
                return (
                  <div className={styles.gallery__img} key={index}>
                    <Image
                      src={item.src}
                      alt="images"
                      height={500}
                      width={400}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
