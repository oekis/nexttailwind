import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title> {props.title} </title>
        <meta name="description" content="NextJS" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
