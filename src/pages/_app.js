import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat, Poppins, League_Spartan} from "next/font/google";

import Head from "next/head";
import { useRouter } from "next/router";


const fontOs = Poppins({
  subsets : ["latin"],
  variable: "--font-al",
  weight: "400"
})


const fontM = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  
});
const fontL = League_Spartan({
  subsets: ["latin"],
  variable: "--font-le",
  
});

export default function App({ Component, pageProps }) {
  const router =  useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${fontM.variable} ${fontOs.variable} ${fontL.variable} font-mont bg-light w-full min-h-screen`}>
        <Navbar/>
        <AnimatePresence
        mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  );
}
