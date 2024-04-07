import Done from "../components/Done/Done";
import Pending from "../components/Pending/Pending";
import Running from "../components/Running/Running";

const ToDo = () => {
  return (
    <div className="p-8">
      <h1 className="text-center border-b text-4xl text-purple-500 py-3">
        Task Management App{" "}
      </h1>

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
