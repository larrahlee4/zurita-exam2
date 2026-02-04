import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-br from-black via-pink-900 to-black border-2 border-pink-400 text-white flex justify-between items-center px-8 py-5 shadow-md">
      <h1 className="text-2xl font-bold">Larrah Lee</h1>

      <nav className="flex gap-4">
        <Link
          className="px-3 py-1 border-b-2 rounded-xl border-pink-400"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-3 py-1 border-b-2 rounded-xl border-pink-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="px-3 py-1 border-b-2 rounded-xl border-pink-400"
          to="/skills"
        >
          Skills
        </Link>
        <Link
          className="px-3 py-1 border-b-2 rounded-xl border-pink-400"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="px-3 py-1 border-b-2 rounded-xl border-pink-400"
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
