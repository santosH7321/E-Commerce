import logo from "../assest/logoBlack.png";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div
        className="h-full container mx-auto flex 
            items-center px-4 justify-between"
      >
        <div className="h-[50px] w-[50px] ">
          <img src={logo} alt="logo" />
        </div>

        {/* Serarch */}
        <div className="hidden lg:flex  items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-[10px]">
          <input
            type="text"
            placeholder="Search product here...."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-500 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* User icon and cards */}
        <div className="flex justify-between items-center gap-7 ">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

            {/* Cart */}
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>

            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>

          {/* Login button */}
          <div>
            <button className="p-3 py-1 rounded-full text-white font-semibold bg-red-600 hover:bg-red-700">
                Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
