import React from "react";

export default function cardTasks({ nomTasks, descriptionTasks,finish }) {
  return (
    <div>
      <p>name :{ nomTasks }</p>
      <p>description : { descriptionTasks }</p>
      <p>finish : { finish }</p>
    </div>
  )
}