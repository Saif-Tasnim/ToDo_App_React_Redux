import { useState } from "react";
import Done from "../components/Done/Done";
import Pending from "../components/Pending/Pending";
import Running from "../components/Running/Running";
import AddTask from "../components/Common/AddTask";

const ToDo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <AddTask isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-center border-b text-4xl text-purple-500 py-3">
        Task Management App{" "}
      </h1>

      <div className="text-center my-10">
        <button
          className="bg-lime-700 text-white px-4 py-2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Add New Task{" "}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-20 section-gap">
        <div>
          <Pending />
        </div>
        <div>
          <Running />
        </div>
        <div>
          <Done />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
