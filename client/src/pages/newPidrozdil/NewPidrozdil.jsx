import "./newPidrozdil.css";
import React from 'react'
import { useContext, useState } from "react"
import { createPidrozdils } from "../../context/pidrozdilContext/apiCalls"
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
          <input type="file" id="file" name="photos" onChange={handleChange}/>
        </div>
        <div className="addPidrozdilItem">
          <label>Назва</label>
          <input type="text" placeholder="Назва Факультетуaaa" name="name" onChange={handleChange}/>
        </div>
        <button className="addPidrozdilButton" onClick={handleSubmit}>Створити</button>
      </form>
    </div>
  );
}
