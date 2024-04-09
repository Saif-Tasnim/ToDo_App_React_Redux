import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/features/tasksSlice";

const SingleTask = ({ task }) => {
  let updatedTask;
  const dispatch = useDispatch();

  updatedTask =
    task.status === "pending"
      ? "running"
      : task.status === "running"
      ? "done"
      : "archive";

  return (
    <div key={task?.id} className="border-b p-4 relative">
      <h3 className="text-center py-3 font-semibold"> Title : {task?.title}</h3>
      <p className="py-2 text-sm">{task?.description}</p>
      <p className="py-3"> Date : {task?.date}</p>
      <p className="py-3"> Status : {task?.status}</p>
      <p className="py-3">Assigned To : {task?.assignedTo}</p>
      <p className="py-3">Priority : {task?.priority}</p>

      <div className="absolute bottom-0 right-0 flex gap-5">
        <button
          className="border bg-purple-700 text-white rounded-md p-1.5"
          onClick={() =>
            dispatch(updateTask({ id: task.id, status: updatedTask }))
          }
        >
          Move to right
        </button>
        <button className="border bg-red-700 text-white rounded-md p-1.5">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
