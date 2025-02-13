import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-orange-400'>
      <div className="flex items-center justify-between py-6 px-4 max-w-screen-xl mx-auto">
        {/* Hamburger menu (visible on small screens) */}
        <div className="lg:hidden">
          <Hamburger toggle={setIsOpen} toggled={isOpen} size={20} direction='right' />
        </div>

        <div>Logo</div>
        <div>
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="hidden lg:block">User</div>
        <div className="hidden lg:block">
          <button>Switch to Admin</button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className="relative z-50">
        <div
          className={`absolute top-0 left-0 w-3/4 h-screen bg-gray-800 text-white transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
        >
          <div className="p-4">
            <div className="collapse collapse-arrow bg-base-200 text-black">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">TV</div>
              <div className="collapse-content">
                <div className="collapse collapse-arrow bg-gray-300">
                  <input type="checkbox" />
                  <div className="collapse-title font-medium">Samsung</div>
                  <div className="collapse-content">
                    <button className="btn btn-sm w-full">Plasma</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="collapse collapse-arrow bg-base-200 text-black mt-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Laptops</div>
              <div className="collapse-content">
                <button className="btn btn-sm w-full">Apple</button>
                <button className="btn btn-sm w-full mt-1">Dell</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
