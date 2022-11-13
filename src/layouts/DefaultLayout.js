import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import SideBar from "../components/SideBar";
function DefaultLayout({ children, onFilter }) {
  const [sideBarActive, setSideBarActive] = useState(false);

  const handlerChose = (item) => {
    if (item === "All") localStorage.removeItem("video-filter");
    else {
      const filter = item
        ?.split(" ")
        ?.map((f, i) => {
          if (i > 0) return f?.substring(0, 1)?.toUpperCase() + f?.substring(1);
          return f?.toLowerCase();
        })
        ?.join("");
      localStorage.setItem("video-filter", filter);
    }
    setSideBarActive(false);
    window.location.reload();
  };
  return (
    <div className="bg-gray-100 w-screen min-h-full relative">
      <Header
        onSideBar={() => setSideBarActive(!sideBarActive)}
        sideBarActive={sideBarActive}
      />

      {children}

      <List hideTitle={false} t="DefLay" />

      {sideBarActive && <SideBar onChose={handlerChose} />}
    </div>
  );
}

export default DefaultLayout;
