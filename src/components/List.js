import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import Card from "./Card";
import SvgIcon from "../components/SvgIcon";
import cartoons from "../content/cartoons";
function List({ hideTitle = true }) {
  const [page, setPage] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [list, setList] = useState([]);
  const localStageFilterVideo = localStorage.getItem("video-filter");
  const allVideos =
    cartoons[localStageFilterVideo] || Object.values(cartoons).flat();
  const observerSpinner = (inView, entry) => {
    if (inView) setPage(page + 1);
    if (list.length > allVideos.length - 5) {
      window.scrollTo({ top: 0 });
      setPage(0);
    }
  };

  const handleOverlay = () => {
    setOverlay(true);
    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };

  useEffect(() => {
    const currentList = allVideos
      ?.map((url) => url?.split("=")[1])
      ?.sort((a, b) => 0.5 - Math.random())
      .slice(page * 10, page ? page * 10 + 10 : 10);
    setList(list.concat(currentList));
  }, [page]);

  return (
    <div className="marker_list flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center mt-2 relative">
      {list.map((url, i) => (
        <Card
          key={i}
          url={url}
          hideTitle={hideTitle}
          wrapperClass="min-w-[200px]"
          onClickVideoPreview={handleOverlay}
        />
      ))}

      <InView
        as="div"
        onChange={(inView, entry) => observerSpinner(inView, entry)}
      >
        <div id="spinner" className="w-full h-5"></div>
      </InView>
      {overlay && (
        <div className="absolute inset-0 bg-slate-300 pt-10 opacity-30">
          <SvgIcon id="spinner" className="mx-auto" />
        </div>
      )}
    </div>
  );
}

export default List;
