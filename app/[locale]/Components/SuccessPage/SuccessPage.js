'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const SuccessPage = () => {

  const t = useTranslations('SuccessPage');

  return (
    
    <div className='container mx-auto px-4 flex flex-col h-screen items-center justify-center'>
      <Image
        src="/thankyou.png"
        width={1000}
        height={1000}
        alt='donationImage'
        className='mx-auto pt-10'
      />
      <div className='pb-10'>
        <h1 className=' text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center'>{t("Thank you!")}</h1>
        <h2 className='text-2xl font-bold mb-2 text-center'>{t("You are on board!!")}</h2>
      </div>
      <div className='donation-buttons flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center text-center lg:text-lg'>
        <Link href="/projects" className='button-light'>
        {t("Back Another Project")}
        </Link>
        <Link href="/" className='px-10 button-light'>
        {t("Go to home page")}
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
