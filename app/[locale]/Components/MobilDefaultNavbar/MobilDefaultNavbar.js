import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setShowSignInBox, setShowMobilNav, setSearchInputVal } from '@/app/redux/features/authSlice';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';


function MobilDefaultNavbar({ bgColor, activeLink, defaultLink, selectedLink }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const t = useTranslations('MobilDefaultNavbar');

  const signInClickHandler = () => {
    router.push('/')
    dispatch(setShowMobilNav())
    setTimeout(() => {
      dispatch(setShowSignInBox())
    }, 1);
  }

  const style = {
    container: `fixed left-1/2 -translate-x-1/2 top-[69px] bg-greenColor flex flex-col items-center w-full space-y-3 md:hidden py-5 z-50 ${bgColor && `bg-greenTransparent`}`,
    headerButton: `button-dark hover:bg-transparent`,
    headerInput: `rounded-needed outline-0 py-1 pl-2 placeholder:text-center `,
  };

  const handleLinkClicks = () => {
    dispatch(setShowMobilNav());
  }
} 

export default MobilDefaultNavbar;
