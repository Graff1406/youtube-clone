import { useState } from "react";
import List from "../components/List";
import Video from "../components/Video";

function VideoLayout() {
  const [isReadyPlayer, setIsReadyPlayer] = useState(false);
  const handlerReadyPlayer = () => setIsReadyPlayer(true);
  return (
    <div className="bg-gray-100 w-screen min-h-full">
      <Video hideTitle={false} onReadyPlayer={handlerReadyPlayer} />
      {isReadyPlayer && <List />}
    </div>
  );
}

export default VideoLayout;
