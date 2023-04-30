import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Fullstack eCommerce Website'
            company='Proshop'
            companyLink='https://ikproshop.herokuapp.com/'
            time='June 2022'
            address='Israel'
            work='Built a Web-based platform that allows users to search, buy, and manage account via website with various products, admin managment and a convenient and efficient solution for digital needs and shopping.'
          />
          <Details
            position='Social Network'
            company='Dev Connector'
            companyLink='https://ikdev-connect-production.up.railway.app/'
            time='October 2022'
            address='Israel'
            work='Built a MERN stack application, It is a small social network app that includes authentication, profiles and forum posts...'
          />
          <Details
            position='Self-educate'
            company='Udemy, other resources'
            companyLink='www.udemy.com'
            time='May 2022-Present'
            address=''
            work='Worked on learning from top-tier teachers online, from The Odin Project, to TraversyMedia, FreeCodeCamp and More. learned best practices and now creating great projects to showcase my skills.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
