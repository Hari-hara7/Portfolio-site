import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">Blog Platform</Link>
        </h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Create Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
