import { useState } from "react";
import List from "../components/List";
import SvgIcon from "../components/SvgIcon";
import Video from "../components/Video";
import { useNavigate } from "react-router-dom";

function VideoLayout() {
  const [isReadyPlayer, setIsReadyPlayer] = useState(false);

  const handlerReadyPlayer = () => setIsReadyPlayer(true);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 w-screen min-h-full">
      <Video hideTitle={false} onReadyPlayer={handlerReadyPlayer} />
      <div className="relative">
        {isReadyPlayer && <List hideTitle={false} t="VidLay" />}
      </div>
      <div
        className="fixed bottom-2 right-2 bg-white rounded-full p-1"
        onClick={() => navigate("/")}
      >
        <SvgIcon id="home" className=" w-5 h-5" />
      </div>
    </div>
  );
}

export default VideoLayout;
