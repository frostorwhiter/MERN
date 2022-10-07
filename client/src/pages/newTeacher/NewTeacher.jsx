import "./newTeacher.css";
import { useContext, useEffect, useState } from "react"
import{ Publish} from "@material-ui/icons";
import { getPidrozdils } from "../../context/pidrozdilContext/apiCalls"
import { createTeachers, getTeachers } from "../../context/teacherContext/apiCalls"
import { TeacherContext } from "../../context/teacherContext/TeacherContext"
import { PidrozdilContext } from "../../context/pidrozdilContext/PidrozdilContext"

export default function NewTeacher() {

  const [teachers, setTeacher] = useState(null)




  const { dispatch } = useContext(TeacherContext)
  const { pidrozdils, dispatch: dispatchCatgorie } = useContext(PidrozdilContext);

  useEffect(() => {
      getPidrozdils(dispatchCatgorie)
  }, [dispatchCatgorie]);

  const handleChange = (e) => {
      const value = e.target.value;
      setTeacher({ ...teachers, [e.target.name]: value });
  };

  const hedleSelect = (e) => {
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
          <label>Teachername</label>
          <input type="text" placeholder="john" onChange={handleChange}/>
        </div>
        <div className="newTeacherItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" onChange={handleChange}/>
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
          <label>Active</label>
          <select className="newTeacherSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newTeacherItem">
          <label>Факультет</label>
          <select className="newTeacherSelect" name="active" id="active">

          </select>
        </div>
        <div className="teacherUpdateUpload">
                <img
                  className="teacherUpdateImg"
                  src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="teacherUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <button className="newTeacherButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
