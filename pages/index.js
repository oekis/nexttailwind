import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs & TailwindCSS</title>
      </Head>
      <Layout />
      <div>
        <h1 className="font-bold text-5xl text-blue-600">
          Setup NextJs, Tailwind, Eslint, Prettier
        </h1>
      </div>
    </>
  );
}
