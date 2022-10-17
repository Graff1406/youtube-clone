import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import Swipe from "react-easy-swipe";
import SvgIcon from "./SvgIcon";
function Card({
  url,
  playing = true,
  autoplay = 1,
  light = true,
  preventPlay = true,
  fixed = false,
  className = "",
  wrapperClass = "",
  hideTitle = true,
  fullscreen = false,
  children,
  onReadyPlayer,
  onClickVideoPreview,
}) {
  const [preventMoveToOrigin, setPreventMoveToOrigin] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleEnd = () => {
    setPreventMoveToOrigin(true);
  };
  const onPlay = () => {
    if (preventMoveToOrigin) setPreventMoveToOrigin(false);
  };
  const handlerFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  return (
    <NavLink
      to={`/${url}`}
      className={`marker_card flex flex-col ${wrapperClass}`}
    >
      <div
        className={`group relative w-full ${
          isFullscreen ? "h-screen" : `h-[210px] ${className}`
        }`}
        onClick={() => onClickVideoPreview(false)}
      >
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=" + url}
          width="100%"
          height="100%"
          light={light}
          playing={playing}
          volume={playing ? 1 : 0}
          controls={true}
          config={{
            youtube: {
              playerVars: {
                autoplay,
                iv_load_policy: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                controls: 1,
                enablejsapi: 1,
                playsinline: 1,
                fs: 0,
              },
            },
          }}
          onEnded={handleEnd}
          onPlay={onPlay}
          onPause={handleEnd}
          onStart={() => onReadyPlayer(true)}
        />

        {preventMoveToOrigin ? (
          <div className="flex justify-center align-middle gap-3 absolute top-0 left-0 right-0 bottom-[38px] bg-black p-3">
            {children}
          </div>
        ) : (
          <div className="absolute top-0 left-0 right-0 bottom-[80%] cursor-none"></div>
        )}
        {fullscreen && (
          <div>
            <SvgIcon
              id="fullscreen"
              className="hidden lg:group-hover:inline fill-white w-6 h-6 cursor-pointer absolute right-[49.2%] bottom-3 z-10"
              onClick={handlerFullScreen}
            ></SvgIcon>
          </div>
        )}
        <Swipe
          onSwipeUp={() => fixed && setPreventMoveToOrigin(true)}
          onSwipeDown={() => fixed && setPreventMoveToOrigin(false)}
        >
          {preventPlay && <div className="absolute inset-0"></div>}
          <div className="absolute left-24 right-24 bottom-0 h-11"></div>
        </Swipe>
      </div>
      {hideTitle && (
        <div className="flex align-middle w-full h-14 px-4 bg-white gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Nick_Jr._Channel_logo.svg/640px-Nick_Jr._Channel_logo.svg.png"
            alt="logo"
            className="w-9 h-9 mt-2 object-cover"
          />
          <h3 className="text-ellipsis font-medium text-sm mt-1">
            🎃Silly Halloween Song + More Nursery Rhymes & Kids Songs -
            CoComelon
          </h3>
        </div>
      )}
    </NavLink>
  );
}

export default Card;
