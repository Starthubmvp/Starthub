import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'ne'],

  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};