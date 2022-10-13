import ReactPlayer from "react-player/youtube";
function Card({ url }) {
  return (
    <div className="marker_card flex flex-col my-2">
      <div>
        <ReactPlayer
          url={url}
          width="100%"
          height="210px"
          light={true}
          playing={true}
        />
      </div>
      <div className="flex align-middle w-full h-14 px-4 bg-white gap-3">
        <img
          src="https://yt3.ggpht.com/ytc/AMLnZu8GABltI2XpBxrmjFcPu1LqVlEALgiqELAwK2b-7Q=s900-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className="w-9 h-9 mt-2"
        />
        <h3 className="text-ellipsis font-medium text-sm mt-1">
          🎃 Build & Deploy a Responsive Halloween Website Design Using HTML CSS
          & JavaScript
        </h3>
      </div>
    </div>
  );
}

export default Card;
