import React, { useState } from "react";
import Card from "./Card";
function List() {
  const [isPlay, setIsPlay] = useState(null);
  const list = [
    "https://www.youtube.com/watch?v=S92H1XzczTM",
    "https://www.youtube.com/watch?v=XWBvsClXDzE",
    "https://www.youtube.com/watch?v=AVtOQrPj0Pc",
    "https://www.youtube.com/watch?v=MFUfPIREv_w",
    "https://www.youtube.com/watch?v=x6CgpcKzyAw",
    "https://www.youtube.com/watch?v=kV8zgacFmn4",
    "https://www.youtube.com/watch?v=6GMDmirH6ts",
    "https://www.youtube.com/watch?v=tJCfd2BWuv8",
    "https://www.youtube.com/watch?v=yWjIv3rEl4o",
    "https://www.youtube.com/watch?v=1j88WVgwxt0",
    "https://www.youtube.com/watch?v=pMLM8GuR_HI",
    "https://www.youtube.com/watch?v=QqKsyefWvD0",
  ];
  const handlePlay = (index) => {
    console.log(11);
    setIsPlay(index);
  };
  return (
    <div className="marker_list flex flex-col mt-2 relative">
      <div className={isPlay !== null ? "h-[260px]" : ""}></div>
      {list.map((url, i) => (
        <div
          key={i}
          className={isPlay === i ? "fixed top-10" : ""}
          onClick={() => handlePlay(i)}
        >
          <Card onPlay={handlePlay} url={url} />
        </div>
      ))}
    </div>
  );
}

export default List;
