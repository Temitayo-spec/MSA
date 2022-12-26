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
            The Management students association is a non-profit organization and
            its saddled with the responsibility of providing and catering for
            the welfarism of her members. The association is made up of various
            departments namely Nuasa,Asisa,Finsa,Bsa and Erhrmsa.
          </i>
          <span>&quot;</span>
        </h2>
        <h3 className={styles.name}>Femi Omolere - MSA President</h3>
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
