import React from 'react';
import { finsaData } from '../../../components/FinsaData';
import TeamCard from '../../TeamCard';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>FINSA</h1>
          <p>Finance Students Association</p>
        </div>
      </div>
      <main className={styles.main__content}>
        <header className={styles.header}>
          <h1>Our Team</h1>
          <p>FINSA EXECUTIVES 21/22 (THE SYNERGY)</p>
        </header>
        <div className={styles.team__container}>
          {finsaData.map((data) => {
            return <TeamCard data={data} key={data.name} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default page;
