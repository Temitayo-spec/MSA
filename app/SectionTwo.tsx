'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import styles from './sectionTwo.module.css';

const SectonTwo = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className={styles.wrapper}>
        <Image
          src="/images/begin-with-us.jpg"
          alt="begin with us"
          width={400}
          height={400}
        />
        <div className={styles.content}>
          <h1>Learning Begins With Us</h1>
          <p>
            Management Students Association; we are an independent
            student-interest organization in the University of Lagos with the
            sole aim of promoting and supporting the welfarism of students of
            the Faculty of Management sciences for a better school life and the
            development of our society and the world at large.....
          </p>
          <button
            onClick={() => {
              setModal(true);
            }}
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default SectonTwo;
