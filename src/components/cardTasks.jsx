import React from "react";
import { ref, remove, set } from "firebase/database";
import { database } from "../firebase.js";
import "@/style/profil.css";

export default function cardTasks({ nomTasks, descriptionTasks, finish, idUsers, idTasks }) {
  const removeTasks = () => {
    const taskstliste = ref(database, 'tasks/' + idUsers + '/' + idTasks);
    remove(taskstliste, (snapshot) => {
      
    })
  }

  const finishtask = () => {
    const taskstliste = ref(database, 'tasks/' + idUsers + '/' + idTasks);
    set(taskstliste, {
      nomTasks: nomTasks,
      descriptionTasks: descriptionTasks,
      finish: !finish,
    })
  }

  return (
    <div className="tasksCard">
      <div className={!finish ? "infoTasksNotFinish" : "infoTasksFinish"}>
        <h2>{ nomTasks }</h2>
        <p>{ descriptionTasks }</p>
      </div>

      <div className="btnTasks">
        {!finish ? (
        <button
          className="btnFinish"
          onClick={finishtask}
        >Finir</button>
        ): (<></>)}
        <button
          className="btnDelete"
          onClick={removeTasks}
        >Supprimer</button>
      </div>
    </div>
  )
}