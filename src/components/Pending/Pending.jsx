import { useSelector } from "react-redux";

const Pending = () => {
  const taskList = useSelector((state) => state.tasks.tasks);

  return (
    <div className="border">
      <h1 className="text-xl font-semibold text-center py-5 border-b"> Pending Task </h1>

      {taskList.map((task) => (
        <div key={task.id} className="border-b p-4">
          <h3 className="text-center py-3 font-semibold"> Title : {task.title}</h3>
          <p className="py-2 text-sm">{task.description}</p>
          <p className="py-3"> Date : {task.date}</p>
          <p className="py-3">Assigned To : {task.assignedTo}</p>
          <p className="py-3">Priority : {task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default Pending;
