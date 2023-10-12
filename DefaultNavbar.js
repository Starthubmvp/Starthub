'use client'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const style = {
  container: `flex items-center space-x-6`,
  headerButton: `button-light text-center text-lg md:text-sm lg:text-lg hover:bg-transparent`,
};

function DefaultNavbar({ defaultLink, activeLink, selectedLink }) {
  const dispatch = useDispatch();
  const t = useTranslations('DefaultNavbar');
  const { push } = useRouter()

  const handleLinkClicks = () => {
    dispatch(setSearchInputVal(''))
  }

  return (
    <div className={style.container}>
      <Link
        onClick={handleLinkClicks}
        className={selectedLink === '/' || selectedLink === '/tr'  ? activeLink : defaultLink}
        href="/"
      >
        {t('Home')}
      </Link>
      <Link
        onClick={handleLinkClicks}
        className={selectedLink === '/projects' || selectedLink === '/tr/projects'  ? activeLink : defaultLink}
        href="/projects"
      >
        {t('Projects')}
      </Link>
      <button
        onClick={() => {
          setTimeout(() => {
            dispatch(setShowSignInBox());
          }, 1);
          push('/')
        }}
        className={style.headerButton}
      >
        {t('Sign In')}
      </button>
    </div >
  );
}

export default DefaultNavbar;

