import React, { useEffect } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import { Routes, Route, useLocation } from "react-router-dom";
import VideoLayout from "./layouts/VideoLayout";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <div>
      <Routes>
        <Route path="/:id" element={<VideoLayout />} />
        <Route path="/" element={<DefaultLayout />} />
      </Routes>
    </div>
  );
}

export default App;
