import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import FixedLinks from "@/components/FixedLinks";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Transition from "@/components/Transition1";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Transition>
    
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>
        
      <Head>
        <link rel="shortcut icon" href="/Images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Images/favicon-16x16.png"
        />
      </Head>
      <Navbar />
      <AnimatePresence>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <FixedLinks />
    </Transition>
  );
}
