import React, { useState } from "react";
import { push, ref, set } from "firebase/database";
import { database } from "../firebase.js";

export default function addTasks({idUsers}) {
  const [nomTasks, setnomTasks] = useState('');
  const [descriptionTasks, setdescriptionTasks] = useState('');
  const [finish, setFinish] = useState(false);

  const onInsertTasks = (e) => {
    e.preventDefault();
    const taskstliste = ref(database, 'tasks/' + idUsers);
    const newTasks = push(taskstliste);
    console.log(newTasks);
    set(newTasks, {
      nomTasks: nomTasks,
      descriptionTasks: descriptionTasks,
      finish: finish,
    });
  }

  return (
    <form>
      <div>
        <label htmlFor="Tasks">Tasks</label>
        <input
          type="Tasks"
          label="Tasks"
          value={nomTasks}
          onChange={(e) => setnomTasks(e.target.value)}
          required
          placeholder="Tasks"
        />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          type="description"
          label="description"
          value={descriptionTasks}
          onChange={(e) => setdescriptionTasks(e.target.value)}
          required
          placeholder="description"
        />
      </div>
      <div>
        <label htmlFor="finish">finish</label>
        <input
          type="finish"
          label="finish"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
          required
          placeholder="finish"
        />
      </div>
      <button
        type="submit"
        onClick={onInsertTasks}
      > poster tache</button>
    </form>
  )
}