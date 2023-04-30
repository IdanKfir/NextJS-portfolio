import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium w-full md:text-sm'>{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            type='Coding Academy'
            time='Mar 2022-June 2022 '
            place='Israel'
            info='The start of My journey was when I joined "Coding Academy".
That was basically where I learned the fundementals of web; the start of the road practically.
I had real fun and learned the basics of web development, and the industry overall.
built small to big projects and coded intreview questions from masters.'
          />
          <Details
            type='Online Courses'
            time='June 2022-May 2023 '
            place='Udemy'
            info='UI&UX Course, and Design Rules Course.
Next I took HTML & CSS Course, following by a full JavaScript Fundementals Course.
After that I took 2 Courses in React.js and 2 Fullstack Courses, then a course In Algorithms & Data Structures - Javascript.
to Finish I took 2 Courses for Projects - one was for 20 Projects in Vanilla-JavaScript,
and One was 50 Projects - One a day which made my github explode with new real-life scenario projects.
'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
