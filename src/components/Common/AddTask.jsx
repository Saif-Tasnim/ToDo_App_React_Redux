import React from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasksSlice";

const AddTask = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const onCancel = () => {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const date = form.date.value;
    const assignedTo = form.assignedTo.value;
    const priority = form.priority.value;

    const data = { title, description, date, assignedTo, priority };

    dispatch(addTask(data));
    onCancel();
  };
  return (
    <div>
      <Modal
        open={isOpen}
        setIsOpen={setIsOpen}
        title="Assigning task to member"
      >
        <form className="my-14" onSubmit={handleSubmit}>
          <input type="text" name="title" /> <br />
          <input type="text" name="description" /> <br />
          <input type="date" name="date" /> <br />
          <select name="assignedTo" id="">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>{" "}
          <br />
          <br />
          <select name="priority" id="">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>{" "}
          <br />
          <br />
          <button
            type="submit"
            className="bg-green-600 text-white px-3 py-2 rounded-lg"
          >
            Add Task
          </button>
          <button
            type="reset"
            className="bg-red-600 text-white px-3 py-2 rounded-lg"
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
