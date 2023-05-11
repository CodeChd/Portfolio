import Link from "next/link"
import Layout from "../components/Layout"
import { FaExclamationTriangle } from 'react-icons/fa'
const ErrorPage = () => {
  return (
    <Layout className="min-h-screen text-center
    flex flex-col items-center justify-center gap-4 transition">
      <p className="flex justify-center items-center gap-2 !text-7xl relative"><FaExclamationTriangle/>404</p>
      Opps!.. there is nothing here!
      <Link href="/" className="absolute translate-y-[5rem] hover:text-lg ">Go back</Link>
      </Layout>
  )
}

export default ErrorPage