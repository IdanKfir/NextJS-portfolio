import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import proshop from '../../public/images/projects/proshop.png';
import iknews from '../../public/images/projects/iknews.png';
import minecraft from '../../public/images/projects/minecraft.png';
import houseretail from '../../public/images/projects/houseretail.png';
import githubfinder from '../../public/images/projects/githubfinder.png';
import hangman from '../../public/images/projects/hangman.png';
import dshirt from '../../public/images/projects/dshirt.png';
import devc from '../../public/images/projects/devc.png';
import cocktails from '../../public/images/projects/cocktails.png';
import dfolio from '../../public/images/projects/3dfolio.png';
import fightingGame from '../../public/images/projects/fightingGame.png';
import dice from '../../public/images/projects/dice.png';
import fitness from '../../public/images/projects/fitness.png';
import Comfy from '../../public/images/projects/comfy.png';
import netflix from '../../public/images/projects/netflix.png';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>

        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10 hover:scale-125'>
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-opacity-80 dark:bg-light dark:text-dark dark:hover:bg-opacity-80 sm:px-4 sm:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
          {type}
        </span>

        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>
            {title}
          </h2>
        </Link>

        <div className=' w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold hover:underline md:text-base'
          >
            Visit
          </Link>
          <Link
            href={github}
            target='_blank'
            className='w-8 hover:scale-125 md:w-6'
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>IdanKfir | Projects Page</title>
        <meta
          name='description'
          content='This page is the about page of my portfolio'
        />
      </Head>
      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Netflix Clone'
                img={netflix}
                summary='Fullstack Netflix Clone with React, NextJS, TailwindCSS & Prisma.'
                link='https://iknetflix.vercel.app/'
                github='https://github.com/IdanKfir/Netflix-Clone'
                type='Featured Project'
              />
            </div>

            <div className='col-span-12'>
              <FeaturedProject
                title='Dev Connector'
                img={devc}
                summary='This is a MERN stack application, It is a small social network app that includes authentication, profiles and forum posts.'
                link='https://ikdev-connect-production.up.railway.app/'
                github='https://github.com/IdanKfir/ikdev-connect'
                type='Featured Project'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='Fitness App'
                img={fitness}
                summary='Fitness App using RapidAPI,React.JS etc.'
                link='https://ik-fitness.netlify.app/'
                github='https://github.com/IdanKfir/fitness-app'
                type='Project'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='House Retail'
                img={houseretail}
                summary='House Selling / Renting with autenthication and responsive to mobile, made with React.js.'
                link='https://ik-houseretail.netlify.app/'
                github='https://github.com/IdanKfir/ik-houseretail'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Minecraft Clone'
                img={minecraft}
                summary='This project is just me trying to mimic Minecraft in React. Using Javascript, React, Three.js.'
                link='https://ik-minecraft.vercel.app/'
                github='https://github.com/IdanKfir/Minecraft-Clone'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='Hangman Game'
                img={hangman}
                summary='Do you know Hangman game? so this is it, made with VanillaJs.'
                link='https://github.com/IdanKfir/Hangman'
                github='https://github.com/IdanKfir/Hangman'
                type='Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='Cocktail Finder'
                img={cocktails}
                summary='A Cocktail finder app using CocktailDb API, built with React.js.'
                link='https://thecocktailsik.netlify.app/'
                github='https://github.com/IdanKfir/Cocktails'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='ProShop'
                img={proshop}
                summary='Web-based platform that allows users to search, buy, and manage account via website with various products, admin managment and a convenient and efficient solution for digital needs and shopping.'
                link='https://ikproshop.herokuapp.com/'
                github='https://github.com/IdanKfir/Proshop'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='3D Shirt Model'
                img={dshirt}
                summary='
                A project that has a 3D-Shirt-Model which is responsive, has Color changes, texture and you can upload logo to the model; openAi prompter for those also. Stack: React.js, Three.js, openAi API.'
                link='https://ik-shirt.vercel.app/'
                github='https://github.com/IdanKfir/3D-Shirt'
                type='Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='News Grid'
                img={iknews}
                summary='News-Grid website Made with HTML & CSS only'
                link='https://idanknews.netlify.app/'
                github='https://github.com/IdanKfir/NewsGrid'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='3D Portfolio'
                img={dfolio}
                summary='3D Portfolio website using models. Stack: this website made with React.js, Three.js,React Three Fiber,Framer Motion, TailwindCss.'
                link='https://ik3d.vercel.app/'
                github='https://github.com/IdanKfir/3D-Portfolio'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='Dice Game'
                img={dice}
                summary='2 Players Dice game, made With Javascript, Html & CSS only'
                link='https://ikdice-game.vercel.app/'
                github='https://github.com/IdanKfir/dice-game'
                type='Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <FeaturedProject
                title='Github Finder'
                img={githubfinder}
                summary='An app to search for github users + repos etc. wrote with React.js, based on github API.'
                link='https://ikgithub-finder.vercel.app/'
                github='https://github.com/IdanKfir/github-finder'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='Brutal Fighters'
                img={fightingGame}
                summary='A 2D Fighting game, built with Javascript, Html Canvas & CSS. lot of gaming logic, animations, models, sprites.
                used with free assets [Oak Woods Environmnent asset - h.io]'
                link='https://ikbrutal.vercel.app/'
                github='https://github.com/IdanKfir/2d-fighting-game'
                type='Featured Project'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Comfy Store'
                img={Comfy}
                summary='A Store made with React.js.'
                link='https://ikstore.netlify.app/'
                github='https://github.com/IdanKfir/eCommerce-Comfy-Sloth'
                type='Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
