import React, { useState } from "react";
import { push, ref, set } from "firebase/database";
import { database } from "../firebase.js";

export default function addTasks({idUsers}) {
  const [nomTasks, setnomTasks] = useState("");
  const [descriptionTasks, setdescriptionTasks] = useState("");
  const [finish, setFinish] = useState(false);

  const onInsertTasks = (e) => {
    e.preventDefault();
    if (nomTasks && descriptionTasks) {
      const taskstliste = ref(database, 'tasks/' + idUsers);
      const newTasks = push(taskstliste);
      set(newTasks, {
        nomTasks: nomTasks,
        descriptionTasks: descriptionTasks,
        finish: finish,
      });
      setnomTasks("");
      setdescriptionTasks("");
    }
  }
    
  return (
    <form className="formTasks">
      <div className="blockInput">
        <div className="blockInputInfo">
          <label htmlFor="Tasks">Nom</label>
          <input
            type="Tasks"
            label="Tasks"
            value={nomTasks}
            onChange={(e) => setnomTasks(e.target.value)}
            required
            className="inputTasks"
          />
        </div>
        <div className="blockInputInfo">
          <label htmlFor="description">Description</label>
          <input
            type="description"
            label="description"
            value={descriptionTasks}
            onChange={(e) => setdescriptionTasks(e.target.value)}
            required
            className="inputTasks"
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={onInsertTasks}
        className="btnAdd"
      > Ajouter la tache</button>
    </form>
  )
}