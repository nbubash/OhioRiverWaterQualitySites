import { Routes, Route } from "react-router-dom";
import Dashboard from "layout/dashboard";
import MapPage from "pages/dashboard/MapPage";


function Site() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<MapPage />} />
      </Route>
    </Routes>
  );
}

export default Site;