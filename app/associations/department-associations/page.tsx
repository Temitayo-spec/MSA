import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { branchesData } from '../../../components/BranchesData';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section__a}>
        <div className={styles.lhs}>
          <p>Association Overview</p>
          <h1>A Commitment to Excellence</h1>
        </div>
        <div className={styles.rhs}>
          <p>
            The Management Students Association aims at offering all our
            students necessary exposure to broad and balanced activities, events
            and well planned and executed programs that provides rewarding and
            stimulating experiences to prepare them for the best social and
            cultural life within the four walls of the Uinversity and the world
            at large. The association is made up of various departments namely
            Nuasa, Asisa, Finsa, Bsa and Erhrmsa.
          </p>
        </div>
      </section>
      <section className={styles.section__b}>
        {branchesData.map((branch, key) => {
          return (
            <div key={key} className={styles.branch}>
              <Image
                src={branch.src}
                alt={branch.name}
                width={300}
                height={300}
              />
              <div className={styles.branch__name}>
                <h2>{branch.name}</h2>
                <p>{branch.description}</p>
                <Link href={branch.link}>
                  <button type="button">Learn More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default page;
