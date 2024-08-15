import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [input, setInput] = useState()
  const activity = props.activity
  const settActivity = props.setActivity

  const handleChange = (event) => {
    setInput(event.target.value)
    console.log(input)
  }

  const handleArr = () => {
      settActivity([...activity,{id: activity.length + 1,activity: input}])
      setInput("")
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activity</h1>
      <div>
        <input
          type="text"
          placeholder="" value={input} onChange={handleChange}
          className="border border-black outline-none p-1"
        />
        <button className="bg-black text-white border border-black p-1" onClick={handleArr}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
