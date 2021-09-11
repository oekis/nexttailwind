import Link from 'next/link';

export default function index() {
  return (
    <header className="flex flex-row-reverse m-0 bg-primary bg-opacity-80">
      <ul className="flex space-x-12 font-medium text-xxl m-4 text-textNav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
