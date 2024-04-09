import { useSelector } from "react-redux";
import SingleTask from "../Common/SingleTask";

const Pending = () => {
  const taskList = useSelector((state) => state.tasks.tasks);
  const pendingTask = taskList.filter((tl) => tl.status === "pending");
  return (
    <div className="border">
      <h1 className="text-xl font-semibold text-center py-5 border-b">
        {" "}
        Pending Task{" "}
      </h1>

      {pendingTask ??
        [].map((task) => <SingleTask key={task.id} task={task} />)}
    </div>
  );
};

export default Pending;
