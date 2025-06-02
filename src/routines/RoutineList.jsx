import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

/** Shows a list of routines. */
export default function RoutineList() {
  const {
    data: routines,
    loading,
    error,
  } = useQuery("/routines", "routines");

  if (loading || !routines) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {routines.map((routine) => (
        <RoutineListItem key={routine.id} routine={routine} />
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */
function RoutineListItem({ routine }) {
  const { token } = useAuth();
  const {
    mutate: deleteRoutine,
    loading,
    error,
  } = useMutation("DELETE", "/routines/" + routine.id, ["routines"]);

  return (
    <li>
      <p>{routine.name}</p>
      {token && (
        <button onClick={() => deleteRoutine()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </li>
    /*{token && (
      <h2>Add a new routine</h2>
    <form action={addRoutine}>
      <lable>
        Name
        <input type="text" name="name" />
      </lable>
      <lable>
        Description
        <input type=""
      </lable>

    </form>
    )}*/
    
  );
}