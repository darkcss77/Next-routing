import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-green-400 px-10 py-3">
      <h1>
        <Link href="/" className="font-extrabold text-xl">
          WebSee
        </Link>
      </h1>
      <ul className="flex gap-3 justify-end mr-10 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Article</Link>
        </li>
        <li>
          <Link href="/image">Images</Link>
        </li>
        <li>
          <Link href="/servercomponent">Server</Link>
        </li>
        <li>
          <Link href="/clientcomponent">Client</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
