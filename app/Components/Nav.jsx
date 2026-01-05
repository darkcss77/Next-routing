import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-3 justify-end mr-10">
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
      </ul>
    </nav>
  );
};

export default Nav;
