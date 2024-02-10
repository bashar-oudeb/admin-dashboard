import { CiSearch } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";

import {
  asian,
  burger,
  cafe,
  meat,
  juice,
  hotDog,
  pizza,
  sea,
  sushi,
  burger2,
  pizza2,
  tacos,
} from "../../assets";

const Body = () => (
  <div className=" basis-80 relative bg-white ">
    <div className=" flex items-center justify-between flex-wrap-reverse gap-4 mt-4 px-1 md:px-3 lg:px-5">
      <div className="flex items-center border-b-2 pb-2 basis-1/2 gap-2">
        <CiSearch className=" text-hoverColor text-[20px] cursor-pointer" />
        <input
          type="text"
          placeholder="Search your favorite"
          className="
            border-none outline-none placeholder:text-sm "
        />
      </div>

      <div className="flex items-center cursor-pointer gap-3">
        <TbCategory className=" text-hoverColor text-[25px] hover:text-[20px] transition-all" />
        <button className=" bg-sideMenuBg text-bodyBg font-semibold px-4 py-2 rounded-md hover:opacity-85 transition-all">
          Go Premium
        </button>
      </div>
    </div>

    <div className=" flex items-center justify-between flex-wrap mt-8 px-3">
      <div className=" flex flex-col gap-2 ">
        <h1 className="font-poppins text-2xl font-black text-titleColor tracking-[1px]">
          Find the best place
        </h1>
        <p className=" text-lg opacity-70">249 restaurants, choose yours</p>
      </div>

      <div className=" flex items-center mt-3">
        <div className=" specials px-4 text-center border-r-2">
          <h3 className=" text-2xl font-bold text-titleColor">95</h3>
          <small className=" opacity-70 text-md">Specials</small>
        </div>
        <div className=" specials px-4 text-center border-r-2">
          <h3 className=" text-2xl font-bold text-titleColor">90</h3>
          <small className=" opacity-70 text-md">Deliveries</small>
        </div>
      </div>
    </div>

    <div className=" flex flex-wrap mt-8 items-center gap-6 lg:gap-10 px-3">
      <div className=" singleCategory grid items-center justify-between text-center ">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={pizza}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center ">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={pizza}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={cafe}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={juice}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={sea}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={sushi}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={asian}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={burger}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={meat}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <img
            src={hotDog}
            alt="pizza"
            className=" w-[70%] flex justify-center m-auto"
          />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>

      <div className=" singleCategory grid items-center justify-between text-center">
        <div className="imgDiv h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center m-auto p-1">
          <AiOutlinePlus className=" w-[80%] h-[80%] text-black object-contain cursor-pointer" />
        </div>
        <span className="  text-sm font-medium opacity-50 pt-2 text-center">
          Italian
        </span>
      </div>
    </div>

    <div className=" flex items-center justify-between mt-8 px-3">
      <div className=" flex flex-col gap-2">
        <h1 className="font-poppins text-xl font-black text-titleColor tracking-[1px]">
          New Restaurant
        </h1>
        <p className=" text-sm  w-[13rem] opacity-70">
          9 restaurant, have been opened up in town
        </p>
      </div>

      <div className=" flex items-center gap-3 cursor-pointer">
        <h3 className=" font-poppins font-medium ">View All </h3>
        <FaArrowRight />
      </div>
    </div>

    <div className="flex items-center justify-between lg:justify-around flex-wrap mt-8 gap-2 ">
      <div className="card flex flex-col gap-3  bg-colorOne rounded-md px-4 py-2 md:w-[45%] lg:w-[30%]">
        <div className=" w-full ">
          <img
            src={tacos}
            alt=""
            className=" h-full w-full object-contain rounded-sm"
          />
        </div>
        <div className="">
          <h1 className=" font-bold text-center text-xl">Tacos</h1>
          <span className=" text-md font-normal flex justify-center">
            Asian Restaurant
          </span>
        </div>
        <div className=" flex  items-center justify-center gap-5 ">
          <div className=" flex flex-col gap-2 items-center  ">
            <IoIosStar className=" cursor-pointer  text-2xl" />
            <span>3.7</span>
          </div>
          <div className=" flex flex-col gap-2 items-center   ">
            <AiFillDollarCircle className=" cursor-pointer  text-2xl" />
            <span>33</span>
          </div>
          <div className=" flex flex-col gap-2 items-center  ">
            <IoHeart className=" cursor-pointer  text-2xl" />
            <span>99</span>
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-3  bg-colorOne rounded-md px-4 py-2 md:w-[45%] lg:w-[30%]">
        <div className=" w-full ">
          <img
            src={pizza2}
            alt=""
            className=" h-full w-full object-contain rounded-sm"
          />
        </div>
        <div className="">
          <h1 className=" font-bold text-center text-xl">Tacos</h1>
          <span className=" text-md font-normal flex justify-center">
            Asian Restaurant
          </span>
        </div>
        <div className=" flex  items-center justify-center gap-5 ">
          <div className=" flex flex-col gap-2 items-center  ">
            <IoIosStar className=" cursor-pointer  text-2xl" />
            <span>3.7</span>
          </div>
          <div className=" flex flex-col gap-2 items-center   ">
            <AiFillDollarCircle className=" cursor-pointer  text-2xl" />
            <span>33</span>
          </div>
          <div className=" flex flex-col gap-2 items-center  ">
            <IoHeart className=" cursor-pointer  text-2xl" />
            <span>99</span>
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-3  bg-colorOne rounded-md px-4 py-2 md:w-[45%] lg:w-[30%]">
        <div className=" w-full ">
          <img
            src={burger2}
            alt=""
            className=" h-full w-full object-contain rounded-sm"
          />
        </div>
        <div className="">
          <h1 className=" font-bold text-center text-xl">Tacos</h1>
          <span className=" text-md font-normal flex justify-center">
            Asian Restaurant
          </span>
        </div>
        <div className=" flex  items-center justify-center gap-5 ">
          <div className=" flex flex-col gap-2 items-center  ">
            <IoIosStar className=" cursor-pointer  text-2xl" />
            <span>3.7</span>
          </div>
          <div className=" flex flex-col gap-2 items-center   ">
            <AiFillDollarCircle className=" cursor-pointer  text-2xl" />
            <span>33</span>
          </div>
          <div className=" flex flex-col gap-2 items-center  ">
            <IoHeart className=" cursor-pointer  text-2xl" />
            <span>99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Body;
