import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__top}>
          <div className={styles.footer__content__top__left}>
            <h2>Management Students Association</h2>
            <p>MSA Office,</p>
            <p>Faculty of Management Sciences,</p>
            <p>University of Lagos</p>
          </div>
          <div className={styles.footer__content__top__middle}>
            <h2>Main Office</h2>
            <p>President</p>
            <p>+234 8152522529</p>
            <p>8:00am - 4:00pm</p>
          </div>
          <div className={styles.footer__content__top__right}>
            <h2>Information</h2>
            <p>General Enquires</p>
            <p>+234 8189749192</p>
            <p>msaunilag@outlook.com</p>
          </div>
        </div>
        <div className={styles.footer__content__bottom}>
          <div className={styles.footer__content__bottom__left}>
            <Image
              src="/images/msa-logo.jpg"
              width={200}
              height={200}
              alt="msa-footer-logo"
            />
          </div>
          <div className={styles.footer__content__bottom__middle}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/associations">Associations</Link>
            <Link href="/events">Events</Link>
            <Link href="/leadership">Leadership</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/do-something">Do Something</Link>
          </div>
          <div className={styles.footer__content__bottom__right}>
            <Link href="">
              <FaTwitter />
            </Link>
            <Link href="">
              <FaTiktok />
            </Link>
            <Link href="">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
