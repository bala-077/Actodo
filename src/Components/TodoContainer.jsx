import React, {useState} from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [activity, setActivity] = useState([
    {
      id:1,
      activity: "Go For The Walk"
    },
    {
      id:2,
      activity: "Wake Up Early Morning At 5'oclk"
    }
  ])
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        <AddTodoForm activity={activity} setActivity={setActivity}/>
        <TodoList activity={activity} setActivity={setActivity}/>
      </div>
    </div>
  );
};

export default TodoContainer;
