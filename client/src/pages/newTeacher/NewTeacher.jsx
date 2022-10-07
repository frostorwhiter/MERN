import "./newTeacher.css";
import { useContext, useEffect, useState } from "react"
import{ Publish} from "@material-ui/icons";
import { createTeachers, getTeachers } from "../../context/teacherContext/apiCalls"
import { TeacherContext } from "../../context/teacherContext/TeacherContext"
export default function NewTeacher() {
  
  const [teachers, setTeacher] = useState(null)
  const { dispatch } = useContext(TeacherContext)
  const handleChange = (e) => {
      const value = e.target.value;
      setTeacher({ ...teachers, [e.target.name]: value });
  };


  console.log(teachers);

  const handleSubmit = (e) => {
      e.preventDefault();

      createTeachers(teachers, dispatch)
  };

  return (
    <div className="newTeacher">
      <h1 className="newTeacherTitle">New Teacher</h1>
      <form className="newTeacherForm">

        <div className="newTeacherItem">
          <label>Full Name</label>
          <input name="title" type="text" placeholder="John Smith" onChange={handleChange}/>
        </div>
        <div className="newTeacherItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" onChange={handleChange} />
        </div>
        <div className="newTeacherItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" onChange={handleChange}/>
        </div>
        
      
        <div className="newTeacherItem">
          <label>Факультет</label>
          <select className="newTeacherSelect" name="active" id="active">
          </select>
        </div>
        
        <button className="newTeacherButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
