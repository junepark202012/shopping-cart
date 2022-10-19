import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const lists = routes.map((route) => (
    <li key={route.path}>
      <Link href={route.path}>{route.name}</Link>
    </li>
  ));

  return (
    <nav className="mb-3 flex items-center justify-between bg-white px-4 py-2 shadow">
      <ul className="flex gap-3 text-xl">{lists}</ul>
      <button className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500">
        <FiShoppingCart className="h-6 w-6 fill-blue-500 text-blue-500" />
        <div className="t absolute bottom-0 right-0 block flex h-5 w-5 translate-x-1/4 translate-y-1/4 items-center justify-center rounded-full border-none bg-rose-500 text-sm text-white ring-2 ring-white">
          3
        </div>
      </button>
    </nav>
  );
}

const routes = [
  { path: "/", name: "Home" },
  { path: "/store", name: "Store" },
  { path: "/about", name: "About" },
];
