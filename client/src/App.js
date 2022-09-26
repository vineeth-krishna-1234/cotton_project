import "./App.css";
import ProfileComp from "./components/ProfilePage/profilePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/Loginpage/LoginPage";
import FormCom from "./components/ratingsPage/ratingsPage";
import ProtectedRoute from "./components/routeProtection/protectedRoute";
import ViewUsers from "./components/Hodcomps/listView/viewUsers";
import ObjectiveForm from "./components/objectivePage/objectiveForm";
import AddUser from "./components/Hodcomps/userAdd/AddUser";
import RemoveUser from "./components/Hodcomps/userRemove/RemoveUser";
import HodRouteProtection from "./components/routeProtection/HodRouteProtection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfileComp />} />
          <Route path="/ratingspage" element={<FormCom />} />
          <Route path="/objectives" element={<ObjectiveForm />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route element={<HodRouteProtection />}>
          <Route
            path="/hod-ratings"
            element={<ViewUsers ActionType="Enter Ratings" />}
          />
          <Route
            path="/hod-objectives"
            element={<ViewUsers ActionType="View objectives" />}
          />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/removeuser" element={<RemoveUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
