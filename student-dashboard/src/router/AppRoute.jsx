import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/student/Dashboard";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
