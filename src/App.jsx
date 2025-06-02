
//import Routines from "./routines/Routines";
import ActivityDetails from "./activities/ActivityDetail";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Layout from "./layout/Layout";
import Error404 from "./Error404";
import { Routes, Route } from "react-router";
import RoutineList from "./routines/RoutineList";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  
return(
<Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />}/>
        <Route path="/:activityId" element={<ActivityDetails />} />
        <Route path="/routines" element={<RoutineList />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes> 
    );
}
