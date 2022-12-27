import { BlogData } from '../../components/BlogData';
import BlogCard from './BlogCard';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {BlogData.map((item, index) => {
          return (
            <BlogCard
              key={index}
              title={item.title}
              content={item.content}
              category={item.category}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
