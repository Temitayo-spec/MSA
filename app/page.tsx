import styles from './page.module.css';
import Slider from './Slider';
import Link from 'next/link';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section__a}>
        <div className={styles.section__a__content}>
          <div className={styles.main__content}>
            <h1>
              Management <br /> Students <br /> Association
            </h1>
            <p>
              This is where we teach students skills they need to transform
              themselves, others, and our global communities.
            </p>
            <Link href="learn-more">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
        <Slider />
      </section>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
}
