'use client';
import React from 'react';
import styles from './sectionThree.module.css';

type Props = {};

const SectionThree = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lhs}>
        <h2>Management Students Association at a Glance</h2>
        <div className={styles.stats__ctn}>
          <div className={styles.stats}>
            <h1>4K+</h1>
            <p>Students Enrollments</p>
          </div>
          <div className={styles.stats}>
            <h1>50+</h1>
            <p>Excos</p>
          </div>
          <div className={styles.stats}>
            <h1>40+</h1>
            <p>Events & Activities</p>
          </div>
          <div className={styles.stats}>
            <h1>100+</h1>
            <p>Faculty Lecturers</p>
          </div>
        </div>
      </div>

      <div className={styles.video}>
        <video width="500" height="500" controls>
          <source src="/video/SOTA-PASSING-OUT.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default SectionThree;
