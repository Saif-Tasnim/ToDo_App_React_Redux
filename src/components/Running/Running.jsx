import SingleTask from "../Common/SingleTask";
import { useSelector } from "react-redux";

const Running = () => {
  const tasksList = useSelector((state) => state.tasks.tasks);
  const runningTask = tasksList.filter((rt) => rt.status === "running");

  return (
    <div className="border">
      <h1 className="text-xl font-semibold text-center py-5 border-b">
        Running Task
      </h1>

      {runningTask ??
        [].map((task) => <SingleTask key={task.id} task={task} />)}
    </div>
  );
};

export default Running;
