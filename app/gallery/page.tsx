import styles from './page.module.css';
import Faculty from './Faculty';
import Exco from './Exco';
import Orientation from './Orientation';
import Career from './Career';
import Studentpreneur from './Studentpreneur';
import Dinner from './Dinner';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>Gallery</h1>
        </header>

        <div className={styles.content}>
          <Faculty />
          <Exco />
          <Orientation />
          <Career />
          <Studentpreneur />
          <Dinner />
        </div>
      </div>
    </div>
  );
};

export default Page;
