import { useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";
import  useQuery  from "../api/useQuery";
import useMutation from "../api/useMutation"




export default function ActivityDetails(){
  const {activityId} = useParams();
  const {token} = useAuth();
  const navigate = useNavigate();

  const{
    data: activity,
    loading,
    error,
  } = useQuery(`/${activityId}`);

  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/${activityId}`, ["activities"]);

  const deleteButton = async () => {
    await deleteActivity();
    navigate("/")
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!activity) return <p>Activity not found</p>

    return(
    <>
    <p>{activity.name}</p>
    <p>{activity.description}</p>;
    {token && (
      <button onClick={deleteButton}>Delete Activity</button>
    )}
    </>



)

}