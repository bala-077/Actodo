import React, { act, useState } from "react";

const TodoItem = (props) => {
    const activity = props.activity
    const setActivity = props.setActivity

    const handleDelete = (DeleteItem) => {
        var newArr = activity.filter(function(item){
            if(item.id === DeleteItem){
                return false
            }
            else{
                return true
            }
        })
        setActivity(newArr)
    }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}.{props.item}
      </p>
      <button className="text-red-500 font-medium" onClick={() => {handleDelete(props.id)}}>Delete</button>
    </div>
  );
};

export default TodoItem;
