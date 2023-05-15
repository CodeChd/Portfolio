import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between  lg:flex-col lg:py-6">
        <span> &copy; {`${new Date().getFullYear()} CJ Francisco` }</span>
        <Link href="/" className="underline underline-offset-2 font-bold">Reach me through my socials</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
