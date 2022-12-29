import React from 'react';
import { erhrmsaData } from '../../../components/ErhrmsaData';
import TeamCard from '../../TeamCard';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>ER&HRMSA</h1>
          <p>
            Employee Relations and Human Resources <br /> Management Student
            Association
          </p>
        </div>
      </div>
      <main className={styles.main__content}>
        <header className={styles.header}>
          <h1>Our Team</h1>
          <p>ER&HRMSA EXECUTIVES 21/22 (THE SYNERGY)</p>
        </header>
        <div className={styles.team__container}>
          {erhrmsaData.map((data) => {
            return <TeamCard data={data} key={data.name} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default page;
