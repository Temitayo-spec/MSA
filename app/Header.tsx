import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';
import { BiChevronDown } from 'react-icons/bi';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo__ctn}>
          <Image
            src="/images/msa-logo.jpg"
            alt="msa-logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className={styles.nav__links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/associations">Associations</Link>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.drop__box}>
              <p>Events</p>
              <BiChevronDown className={styles.dropdown__icon} />
            </div>
            <div className={styles.dropdown__content}>
              <Link href="/events">All Events</Link>
              <Link href="/events/annual">Annual Events</Link>
              <Link href="/events/other">Other Events</Link>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.drop__box}>
              <p>Leadership</p>
              <BiChevronDown className={styles.dropdown__icon} />
            </div>
            <div className={styles.dropdown__content}>
              <Link href="/events">All Events</Link>
              <Link href="/events/annual">Annual Events</Link>
              <Link href="/events/other">Other Events</Link>
            </div>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.dropdown}>
            <div className={styles.drop__box}>
              <p>Do Something</p>
              <BiChevronDown className={styles.dropdown__icon} />
            </div>
            <div className={styles.dropdown__content}>
              <Link href="/events">All Events</Link>
              <Link href="/events/annual">Annual Events</Link>
              <Link href="/events/other">Other Events</Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
