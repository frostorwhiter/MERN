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
  console.log(groups);

  const handleSubmit = (e) => {
      e.preventDefault();

      createGroups(groups, dispatch)
  };
  const hedleSelect = (e) => {
    const value = e.target.value;
    setGroup({ ...groups, [e.target.name]:value});
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
          <label>Факультет</label>
          <select multiple name="pidrozdils" onChange={hedleSelect} >
                  {pidrozdils.map((pidrozdil) => (
                      <option key={pidrozdil._id} value={pidrozdil.name}>
                       {pidrozdil.name}
                        </option> ))} </select>                
        </div>
        <button className="newGroupButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
