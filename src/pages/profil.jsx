import React, { useMemo, useState } from "react";
import { auth, database } from "../firebase.js";
import LogOut from "@/components/logoutBtn.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import CardTasks from "@/components/cardTasks.jsx";
import AddTasks from "@/components/addTasks.jsx";

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
          console.log(snapshot);
          if (snapshot) {
            console.log(Object.values(snapshot.val()));
            setdata(Object.values(snapshot.val()));
          } else {
            console.log("pa de tasks");
          }
        })
      } else {
        console.log('pas de users');
        navigate("/");
      }
    })
  }, []);
  
  return (
    <div>
      <LogOut />
      <h1>profil page {email}</h1>
      <p className="">{email}</p>
      <p>{idUsers}</p>
      <div className="">
        <AddTasks
         idUsers = { idUsers }
        ></AddTasks>

      </div>
      <div className="">
        <h2>list tasks</h2>
        {datas.map((task, index) => (
          <CardTasks
            key={ index }
            nomTasks={ task.nomTasks }
            descriptionTasks={ task.descriptionTasks }
            finish={ task.finish }
          ></CardTasks>
        ))}
      </div>
    </div>
  )
}