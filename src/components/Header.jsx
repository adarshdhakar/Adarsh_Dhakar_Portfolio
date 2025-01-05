import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to control the toggle

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSearch = () => {
    navigate(`/search?term=${searchTerm}`);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="py-5">
      <Navbar className="border-b-2 h-20 fixed w-full z-20 top-0 bg-white dark:bg-black">
        <div className="flex items-center justify-between w-full">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            Adarsh Dhakar
          </Link>
          
          <div className="flex items-center gap-4 md:order-2">
            {/* Control the collapse based on isNavbarOpen */}
            <Navbar.Collapse className={isNavbarOpen ? 'block' : 'hidden'}>
              <Navbar.Link
                active={location.pathname === '/'}
                as={'div'}
                className={location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}
              >
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
              </Navbar.Link>
              <Navbar.Link
                active={location.pathname === '/about'}
                as={'div'}
                className={location.pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}
              >
                <Link to="/about" className="text-lg font-medium">
                  About
                </Link>
              </Navbar.Link>
              <Navbar.Link
                active={location.pathname === '/projects'}
                as={'div'}
                className={location.pathname === '/projects' ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}
              >
                <Link to="/projects" className="text-lg font-medium">
                  Projects
                </Link>
              </Navbar.Link>
              <Navbar.Link>
                <a href="/docs/Adarsh_Dhakar.pdf" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">
                  Resume
                </a>
              </Navbar.Link>
              <Navbar.Link
                active={location.pathname === '/contact'}
                as={'div'}
                className={location.pathname === '/contact' ? 'text-blue-600 dark:text-blue-400' : 'text-black dark:text-white'}
              >
                <Link to="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </Navbar.Link>
            </Navbar.Collapse>
            <TextInput
              className="hidden md:block w-64 border-2 dark:border-gray-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              className="hidden md:block"
              color="gray"
              pill
              onClick={handleSearch}
            >
              <AiOutlineSearch />
            </Button>

            <Button
              className="w-10 h-10"
              color="gray"
              pill
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === 'light' ? <FaSun /> : <FaMoon />}
            </Button>

            {/* Manually toggle the Navbar */}
            <Button
              onClick={toggleNavbar}
              className="md:hidden w-10 h-10"
              color="gray"
              pill
            >
              {isNavbarOpen ? 'Close' : 'Open'}
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
