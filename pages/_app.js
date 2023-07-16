import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import FixedLinks from "@/components/FixedLinks";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Transition from "@/components/Transition1";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Transition>
        
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
