import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/profile-icon.svg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const profileItems = ["Profile", "Settings", "Logout"];
  const menuItems = ["Home", "Upload", "About"];

  return (
    <nav className="bg-amber-400 shadow sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* LOGO */}
          <div className="logo">
            <Link to="/" className="font-bold text-2xl text-gray-800">
              MyApp
            </Link>
          </div>

          {/* DESKTOP MENU + SEARCH */}
          <div className="hidden md:flex items-center gap-6">
            {/* Desktop Menu */}
            <div className="flex items-center gap-4 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `py-2 px-4 rounded-md transition ${
                      isActive
                        ? "bg-gray-500 text-white border-amber-600"
                        : "hover:bg-gray-500 hover:text-white"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 border border-gray-500 rounded-full pl-4 pr-10 py-1
                focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* PROFILE ICON + DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
            >
              <img src={profilePic} alt="Profile" />
            </button>

            {isDropdownOpen && (
              <ul className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                {/* MOBILE SEARCH */}
                <li className="block md:hidden px-3 pb-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full border border-gray-500 rounded-full pl-4 pr-10 py-1"
                    />
                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  </div>
                </li>

                {/* MOBILE MENU */}
                <div className="block md:hidden border-t my-2"></div>
                {menuItems.map((item) => (
                  <li
                    key={item}
                    className="block md:hidden px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}

                <div className="block md:hidden border-t my-2"></div>

                {/* PROFILE OPTIONS */}
                {profileItems.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
