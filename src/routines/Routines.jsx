import { useAuth } from "../auth/AuthContext";

import RoutineList from "./RoutineList";
import RoutineForm from "./RoutineForm";

/**
 * All users can see a list of activities.
 * If they are logged in, they will also see a form to create an activity.
 */
export default function RoutinePage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <RoutineList />
      {token && <RoutineForm />}
    </>
  );
}