import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="/about">TODOs</a>
        </li>
      </ul>
    </nav>
  );
}
