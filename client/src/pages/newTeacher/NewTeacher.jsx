import "./newTeacher.css";
import{ Publish} from "@material-ui/icons";
export default function NewTeacher() {
  return (
    <div className="newTeacher">
      <h1 className="newTeacherTitle">New Teacher</h1>
      <form className="newTeacherForm">
        <div className="newTeacherItem">
          <label>Teachername</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newTeacherItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newTeacherItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newTeacherItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
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
        <button className="newTeacherButton">Create</button>
      </form>
    </div>
  );
}
