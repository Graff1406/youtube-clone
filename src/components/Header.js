import SvgIcon from "./SvgIcon";
function Header({ onSideBar, sideBarActive }) {
  return (
    <div className="marker_header flex justify-between align-middle h-[50px] bg-white shadow-md sticky top-0 z-10">
      <SvgIcon id="youtube-logo" className="w-[113px]" />
      <SvgIcon
        id={sideBarActive ? "close" : "filter"}
        className="w-6 fill-gray-600 mr-3 cursor-pointer"
        onClick={onSideBar}
      />
    </div>
  );
}
export default Header;
