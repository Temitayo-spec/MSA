import React from 'react';
import Card from './Card';
import {
  classRepsFour,
  classRepsOne,
  classRepsThree,
  classRepsTwo,
} from './ClassRepData';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>
            Class <br /> Representatives
          </h1>
          <p></p>
        </div>
      </div>
      <main className={styles.main__content}>
        <header className={styles.header}>
          <h1>Our Team</h1>
          <p>Class Representatives 21/22</p>
        </header>
        <div className={styles.team__container}>
          <h1>Year 1 Class Representatives</h1>
          <div className={styles.reps__ctn}>
            {classRepsOne.map((data, key) => {
              return <Card key={key} data={data} />;
            })}
          </div>
        </div>
        <div className={styles.team__container}>
          <h1>Year 2 Class Representatives</h1>
          <div className={styles.reps__ctn}>
            {classRepsTwo.map((data, key) => {
              return <Card key={key} data={data} />;
            })}
          </div>
        </div>
        <div className={styles.team__container}>
          <h1>Year 3 Class Representatives</h1>
          <div className={styles.reps__ctn}>
            {classRepsThree.map((data, key) => {
              return <Card key={key} data={data} />;
            })}
          </div>
        </div>
        <div className={styles.team__container}>
          <h1>Year 4 Class Representatives</h1>
          <div className={styles.reps__ctn}>
            {classRepsFour.map((data, key) => {
              return <Card key={key} data={data} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
