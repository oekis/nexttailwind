import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div>
      <h1>OooPsssss.....</h1>
      <h1>Salah ALamat Cesssssss......</h1>
    </div>
  );
}
