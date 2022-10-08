import "./newGroup.css";
import { useContext, useEffect, useState } from "react"
import{ Publish} from "@material-ui/icons";
import { getPidrozdils } from "../../context/pidrozdilContext/apiCalls"
import { createGroups, getGroups } from "../../context/groupContext/apiCalls"
import { GroupContext } from "../../context/groupContext/GroupContext"
import { PidrozdilContext } from "../../context/pidrozdilContext/PidrozdilContext"

export default function NewGroup() {

  const [groups, setGroup] = useState(null)
  const { dispatch } = useContext(GroupContext)
  const { pidrozdils, dispatch: dispatchCatgorie } = useContext(PidrozdilContext);

  useEffect(() => {
      getPidrozdils(dispatchCatgorie)
  }, [dispatchCatgorie]);

  const handleChange = (e) => {
      const value = e.target.value;
      setGroup({ ...groups, [e.target.name]: value });
  };

  const hedleSelect = (e) => {
      const value = e.target.value;
      setGroup({ ...groups, [e.target.name]: value });
  };

  console.log(groups);

  const handleSubmit = (e) => {
      e.preventDefault();

      createGroups(groups, dispatch)
  };


  return (
    <div className="newGroup">
      <h1 className="newGroupTitle">New Group</h1>
      <form className="newGroupForm">
        <div className="newGroupItem">
          <label>Groupname</label>
          <input type="text" placeholder="john" onChange={handleChange}/>
        </div>
        <div className="newGroupItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" onChange={handleChange}/>
        </div>
        <div className="newGroupItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" onChange={handleChange} />
        </div>
        <div className="newGroupItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" onChange={handleChange}/>
        </div>
        
        <div className="newGroupItem">
          <label>Active</label>
          <select className="newGroupSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newGroupItem">
          <label>Факультет</label>
          <select className="newGroupSelect" name="active" id="active">
          </select>
        </div>
        <div className="groupUpdateUpload">
                <img
                  className="groupUpdateImg"
                  src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="groupUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <button className="newGroupButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
