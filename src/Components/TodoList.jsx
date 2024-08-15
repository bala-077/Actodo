import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const activity = props.activity
  const setActivity = props.setActivity

  return (
    <div className="bg-[#bdb4ea] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {activity.length === 0 ? <p>You Haven't Any Values</p>:""}
      {
        activity.map(function(item, index){
          return <TodoItem id={item.id} index={index} item={item.activity} activity={activity} setActivity={setActivity}/>
        })
      }
    </div>
  );
};

export default TodoList;
