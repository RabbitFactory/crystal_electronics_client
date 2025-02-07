import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-6 bg-orange-400 bg-opacity-100 px-4">
        {/* Hamburger menu (visible on small screens) */}
        <div className="lg:hidden">
          <Hamburger toggle={setIsOpen} toggled={isOpen} size={20} />
        </div>

        <div>Logo</div>
        <div>Search</div>
        <div className="hidden lg:block">User</div>
      </div>

      {/* Mobile Sidebar Menu */}
      {/* this relative and absolute combo is needed so it doesn't push the home page contents down */}
      <div className="relative z-50">
        <div
          className={`absolute w-3/4 h-screen bg-gray-600 transition-all duration-500 ease-in-out will-change-transform ${
  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
            <div className="w-3/4 h-screen bg-gray-600 flex flex-col p-4">
              


           



              <div className="mb-4 font-bold text-white">Collapsable</div>
              <div className="mb-4 font-bold text-white">Collapsable</div>
              <div className="mb-4 font-bold text-white">Collapsable</div>
              <div className="mb-4 font-bold text-white">Collapsable</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
