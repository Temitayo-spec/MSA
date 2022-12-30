'use client';
import React, { useEffect, useState } from 'react';
import { msaData } from '../../../components/MsaData';
import TeamCard from '../../TeamCard';
import Accordion from './Accordion';
import styles from './page.module.css';

const Page = () => {
  const [current, setCurrent] = useState(0);
  const sliderData = [
    {
      bigText: 'MSA',
      smallText: 'Management Science Association',
    },
    {
      bigText: `The Zeniths'21`,
      smallText:
        'Integrity has always been our watch word and we are committed to delivering excellently on every promise.',
    },
  ];

  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        {sliderData.map((slide, index) => {
          return (
            <div className={index === current ? styles.slide : ''} key={index}>
              {index === current && (
                <div className={styles.bannerText}>
                  <h1>{slide.bigText}</h1>
                  <p>{slide.smallText}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <main className={styles.main__content}>
        <header className={styles.header}>
          <h1>Our Team</h1>
          <p>ASISA EXECUTIVES 21/22 (THE SYNERGY)</p>
        </header>
        <div className={styles.team__container}>
          {msaData.map((data) => {
            return <TeamCard data={data} key={data.name} />;
          })}
        </div>
        <section className={styles.section__ctn}>
          <header className={styles.header}>
            <h1>Get to know your Officers</h1>
            <p>
              We quizzed your Student Officer Team on several issues. But we
              didn&apos;t just talk work... Select an Officer&apos;s name to
              find out about their hobbies, what they couldn&apos;t live
              without, and what superpower they want.
            </p>
          </header>
          <Accordion />
        </section>
      </main>
    </div>
  );
};

export default Page;
