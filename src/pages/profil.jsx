import React, { useMemo, useState } from "react";
import { auth, database } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import CardTasks from "@/components/cardTasks.jsx";
import AddTasks from "@/components/addTasks.jsx";
import "@/style/profil.css";

export default function profil() {
  const navigate = useNavigate();
  const [idUsers, setIdUsers] = useState("");
  const [email, setEmail] = useState("");
  const [datas, setdata] = useState([]);

  useMemo(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email)
        setIdUsers(user.uid);
        const refStats = ref(database, 'tasks/' + user.uid);
        onValue(refStats, (snapshot) => {
          setdata(Object.entries(snapshot.val()));
        })
      } else {
        navigate("/");
      }
    })
  }, [ ]);
  
  return (
    <div className="containerprofil">
      <h1>Profil de { email }</h1>
      <div className="addTasks">
        <AddTasks
         idUsers = { idUsers }
        ></AddTasks>
      </div>
      <div className="mapTasks">
        {datas.map((task, index) => (
          <CardTasks
            key={ index }
            nomTasks={ task[1].nomTasks }
            descriptionTasks={ task[1].descriptionTasks }
            finish={ task[1].finish }
            idUsers={ idUsers }
            idTasks={ task[0] }
          ></CardTasks>
        ))}
      </div>
    </div>
  )
}