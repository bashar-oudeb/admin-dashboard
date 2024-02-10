import { MdRestaurantMenu } from "react-icons/md";
import admin from "../../assets/admin.png";
import { FaHome } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="  w-full flex items-center justify-between lg:flex-col lg:justify-start lg:gap-32 lg:basis-20 relative bg-sideMenuBg py-5 px-4">
      {/* logo*/}
      <div className=" logo gap-2 text-white text-[20px] font-black flex items-center">
        <MdRestaurantMenu />
        <h1>FOODIE</h1>
      </div>

      <div className=" flex items-center gap-3 lg:justify-center text-white lg:flex-col lg:gap-4 admin">
        <div className=" flex-col flex items-center gap-3">
          <img
            src={admin}
            alt="image-user"
            className=" w-9 h-9 lg:h-12 lg:w-12 object-contain "
          />
          <h3 className=" font-normal text-textColor opacity-85 hidden lg:block">
            {" "}
            Ayman mens
          </h3>
        </div>

        <div className="">
          <button onClick={toggle} className="lg:hidden">
            {open ? (
              <IoClose className="text-2xl" />
            ) : (
              <AiOutlineMenuFold className="text-2xl mt-2" />
            )}
          </button>
        </div>

        <div className=" hidden   lg:inline-flex flex-col gap-5 text-gray-200 ml-5  ">
          <li className=" flex items-center gap-2 px-3 pb-3   transition-all ">
            <FaHome />
            <a
              href=""
              className=" text-gray-200 font-poppins font-semibold text-md"
            >
              Home
            </a>
          </li>

          <li className=" flex items-center gap-2 px-3 pb-3 hover:opacity-100 transition-all ">
            <TbCategory />
            <a
              href=""
              className="text-gray-200 font-poppins font-semibold text-md"
            >
              Category
            </a>
          </li>

          <li className=" flex items-center gap-2 px-3 pb-3 hover:opacity-100 transition-all ">
            <BsFillBookmarkCheckFill />
            <a
              href=""
              className="text-gray-200 font-poppins font-semibold text-md"
            >
              Reservation
            </a>
          </li>

          <li className=" flex items-center gap-2 px-3 pb-3 hover:opacity-100 transition-all ">
            <MdFavorite />
            <a
              href=""
              className="text-gray-200 font-poppins font-semibold text-md"
            >
              Favorite
            </a>
          </li>

          <li className=" flex items-center gap-2 px-4 pb-3 hover:opacity-100 transition-all ">
            <GrLogout />
            <a
              href=""
              className="text-gray-200 font-poppins font-semibold text-md"
            >
              Log OUT
            </a>
          </li>
        </div>
      </div>
      <div
        className={`absolute flex md:hidden flex-col mx-auto justify-start items-center top-[4.7rem] 
                    left-0 gap-8 w-full bg-black py-16 transition-all   
                       shadow-lg z-50 h-[56vh]  ${open ? "flex" : "hidden"}`}
      >
        <li className=" flex items-center gap-2 px-3 pb-3   transition-all ">
          <FaHome />
          <a
            href=""
            className=" text-gray-200 font-poppins font-semibold text-xl"
          >
            Home
          </a>
        </li>

        <li className=" flex items-center gap-2 px-3 pb-3 hover:opacity-100 transition-all ">
          <TbCategory />
          <a
            href=""
            className="text-gray-200 font-poppins font-semibold text-xl"
          >
            Category
          </a>
        </li>

        <li className=" flex items-center gap-2 px-3 pb-3 hover:opacity-100 transition-all ">
          <BsFillBookmarkCheckFill />
          <a
            href=""
            className="text-gray-200 font-poppins font-semibold text-xl"
          >
            Reservation
          </a>
        </li>

        <li className=" flex items-center gap-2 px-3 pb-3 hover:opacity-100 transition-all ">
          <MdFavorite />
          <a
            href=""
            className="text-gray-200 font-poppins font-semibold text-xl"
          >
            Favorite
          </a>
        </li>

        <li className=" flex items-center gap-2 px-4 pb-3 hover:opacity-100 transition-all ">
          <GrLogout />
          <a
            href=""
            className="text-gray-200 font-poppins font-semibold text-xl"
          >
            Log OUT
          </a>
        </li>
      </div>
    </div>
  );
};

export default SideMenu;
