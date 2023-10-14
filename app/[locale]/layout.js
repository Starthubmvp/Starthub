import '../globals.css'
import { Outfit } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import NavbarLayOut from './Components/NavbarLayout/NavbarLayout'
import { ReduxProvider } from '../redux/provider'
import { ToastContainer } from 'react-toastify';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'StartHub',
  description: 'Welcome to StartHub - where startups meets impact! ',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ne' }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={outfit.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <ProjectsContainer>
              <NavbarLayOut />
              {children}
              <Footer />
              <ToastContainer />
            </ProjectsContainer>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

