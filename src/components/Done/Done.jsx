import { useSelector } from "react-redux";
import SingleTask from "../Common/SingleTask";

const Done = () => {
  const tasksList = useSelector((state) => state.tasks.tasks);
  const doneTask = tasksList.filter((rt) => rt.status === "done");
  return (
    <div className="border">
      <h1 className="text-xl font-semibold text-center py-5 border-b">Done</h1>

      {doneTask ?? [].map((task) => <SingleTask task={task} key={task.id} />)}
    </div>
  );
};

export default Done;
