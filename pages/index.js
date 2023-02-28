import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Home({ user }) {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold mt-10">Dashboard</p>
      {user.name} <br /> <br /> <br /> <br /> <br /> <br />
      <Link href="/api/auth/logout">Logout</Link>
      <p className="text-gray-700 text-3xl mb-16 font-bold"></p>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-pink-300 h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();