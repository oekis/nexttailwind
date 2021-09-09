import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title> {props.title} </title>
        <meta name="description" content="NextJS" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
