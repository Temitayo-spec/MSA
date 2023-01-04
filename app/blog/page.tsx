'use client';
import { useEffect, useRef } from 'react';
import { BlogData } from '../../components/BlogData';
import BlogCard from './BlogCard';
import gsap from 'gsap';
import styles from './page.module.css';
import Transition from '../Transition';

const Page = () => {
  const blog = gsap.timeline();
   const blogCtn = useRef(null);

   useEffect(() => {
     blog.to(
       blogCtn.current,
       {
         duration: 0.5,
         scaleY: 1,
         opacity: 1,
         ease: 'power3.out',
         transformOrigin: 'top',
       },
       '-=0.5'
     );
   });

  return (
    <>
      <Transition timeline={blog} text='Blog' />
      <div className={styles.wrapper} ref={blogCtn}>
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

export default Page;
