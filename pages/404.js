import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <Layout title="Oopss 404">
      <h1>OooPsssss.....</h1>
      <h1>Salah ALamat Cesssssss......</h1>
    </Layout>
  );
}
