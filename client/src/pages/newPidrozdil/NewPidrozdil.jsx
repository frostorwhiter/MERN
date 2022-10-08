import "./newPidrozdil.css";
import React from 'react'
import { useContext, useEffect, useState } from "react"
import { createPidrozdils, getPidrozdils } from "../../context/pidrozdilContext/apiCalls"
import { PidrozdilContext } from "../../context/pidrozdilContext/PidrozdilContext"
export default function NewPidrozdil() {
    const [pidrozdils, setPidrozdil] = useState(null)
    const { dispatch } = useContext(PidrozdilContext)
    const handleChange = (e) => {
        const value = e.target.value;
        setPidrozdil({ ...pidrozdils, [e.target.name]: value });
    };


    console.log(pidrozdils);

    const handleSubmit = (e) => {
        e.preventDefault();

        createPidrozdils(pidrozdils, dispatch)
    };
  return (
    <div className="newPidrozdil">
      <h1 className="addPidrozdilTitle">Новий Факультет</h1>
      <form className="addPidrozdilForm">
        <div className="addPidrozdilItem">
          <label>Image</label>
          <input type="file" id="file" name="img" onChange={handleChange}/>
        </div>
        <div className="addPidrozdilItem">
          <label>Назва</label>
          <input type="text" placeholder="Назва Факультету" name="name" onChange={handleChange}/>
        </div>
        <button className="addPidrozdilButton" onChange={handleSubmit}>Створити</button>
      </form>
    </div>
  );
}
