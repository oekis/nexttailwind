import Link from 'next/link';

export default function index() {
  return (
    <header className="m-0 bg-blue-500">
      <div className="flex item-center justify-between">
        <div className="flex">
          <a
            href="#"
            className="item-center m-3 text-gray-900 hover:text-gray-300"
          >
            <svg width="33" height="32" fill="currentColor">
              <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z" />
            </svg>
          </a>
        </div>
        <div className="flex mx-4">
          <ul className="flex items-center space-x-12 font-medium text-xxl text-gray-100">
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
        </div>
      </div>
    </header>
  );
}
