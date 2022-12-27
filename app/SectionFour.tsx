import Image from 'next/image';
import React from 'react';
import styles from './sectionFour.module.css';

const SectionFour = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lhs}>
        <h2 className={styles.quote}>
          <span>&quot;</span>
          <i>
            The management Students organization is a non-profit org that is
            saddled with the responsibility of catering for the total welfarism
            of her members. The association is made of up other departmental
            associations namely: Asisa, BSA, Ermsa, Finsa, Nuasa.
          </i>
          <span>&quot;</span>
        </h2>
        <h3 className={styles.name}>Omolere Oluwafemi - MSA President</h3>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/msa-president.jpg"
          width={400}
          height={400}
          alt="msa president"
        />
      </div>
    </div>
  );
};

export default SectionFour;
