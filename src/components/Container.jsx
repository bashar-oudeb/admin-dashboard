import SideMenu from "./SideMenu/SideMenu";
import Body from "./body/Body";

const container = () => (
  <div className="h-full w-full lg:h-[95%] lg:w-[95%] lg:m-auto lg:flex lg:my-5  ">
    <SideMenu />
    <Body />
  </div>
);

export default container;
