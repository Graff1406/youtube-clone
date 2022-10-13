import List from "../components/List";
import SvgIcon from "../components/SvgIcon";
function DefaultLayout() {
  return (
    <div className="bg-gray-100 w-screen min-h-full relative">
      <div className="marker_header flex justify-between align-middle h-[50px] bg-white shadow-md sticky top-0 z-10">
        <SvgIcon id="youtube-logo" className="w-[113px]" />
        <SvgIcon
          id="search-icon"
          className="w-6 fill-gray-600 mr-3 cursor-pointer"
        />
      </div>

      <List />
    </div>
  );
}

export default DefaultLayout;
