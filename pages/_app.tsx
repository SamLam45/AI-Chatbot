import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>JustDance - Dance Class Website</title>
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
        
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        
        {/* Owl Carousel CSS */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" rel="stylesheet" />
        
        {/* Lightbox CSS */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />

      {/* jQuery */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      
      {/* Bootstrap Bundle with Popper */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      
      {/* jQuery Easing */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" strategy="beforeInteractive" />
      
      {/* Owl Carousel */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" />
      
      {/* Lightbox */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" strategy="beforeInteractive" />
      
      {/* Custom JS */}
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
