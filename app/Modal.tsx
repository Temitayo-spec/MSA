import React from 'react';
import styles from './modal.module.css';

type Props = {
  setModal: (modal: boolean) => any;
};

const Modal = ({ setModal }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <button onClick={() => setModal(false)}>X</button>
        <h1>Learning Begins With Us</h1>
        <p>
          Management Students Association; we are an independent
          student-interest organization in the University of Lagos with the sole
          aim of promoting and supporting the welfarism of students of the
          Faculty of Management sciences for a better school life and the
          development of our society and the world at large. Also, we provide
          our students with numerous opportunity to enjoy their university life
          with activities that bring out their innate talent. Our objectives are
          ensured through organization of seminars, tutorials, workshops,
          conferences, training, social/sport event and other capacity
          development programs.
        </p>
        <p>
          The association spans over 5000 members across various departments in
          the Faculty of Management Sciences comprising of Accounting, Actuarial
          Science, Business Administration, Employment Relation and Human
          Resource Management, Finance and Insurance.
        </p>
        <p>
          We pride ourselves on being the leading faculty students’ association
          in going all out in providing our students with impactful engagements
          in the most fascinating fashion. We have successfully hosted top-tier
          events over the years, including but not limited to 7 editions of
          Career Expo graced by dignitaries such as the current CBN governor
          Godwin Emefiele and former Lagos state governor Akinwunmi Ambode, MSA
          annual Enterpreneurship and Innovation Challenge with over Five
          million Naira distributed in prizes across 5 editions to students with
          innovative ideas, MSA-Jobberman SoftSkill Training, MSA Alumni Award
          and Networking Dinner and MSA Annual Dinner and Award Night.
        </p>
      </div>
    </div>
  );
};

export default Modal;
