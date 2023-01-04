import { BlogData } from '../../components/BlogData';
import BlogCard from './BlogCard';
import gsap from 'gsap';
import styles from './page.module.css';
import Transition from '../Transition';

const page = () => {
  const blog = gsap.timeline();

  return (
    <>
      <Transition timeline={blog} text='Blog' />
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
    </>
  );
};

export default page;
