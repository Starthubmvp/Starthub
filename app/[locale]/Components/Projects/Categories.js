import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { useTranslations } from 'next-intl';

const Categories = ({ selectedCategory, handleCategoryChange }) => {
  const t = useTranslations('Projects');
  return (
    <div className="container mx-auto place-content-center pt-10 pb-20 px-4">
      <div className="categories-part flex flex-col justify-between">
        <header>
          <h1 className="projects__title text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pb-10 md:text-start">{t("Categories")}</h1>
        </header>
        <div className="cat-buttons flex justify-center md:justify-start gap-4 flex-wrap">
          <div className="flex flex-col items-center">
            <button
              className={` ${selectedCategory === 'all' ? `bg-blackColor text-whiteColor` : ''}   category-button `}
              onClick={() => handleCategoryChange('all')}
            >
              <TfiWorld size={20} />
            </button>
            <p className="text-center">{t("All")}</p>
          </div>
        </div>
      </div> 
    </div>  
  );
};

export default Categories;
