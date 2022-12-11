import { Link } from "react-router-dom";
import "./pidrozdil.css";
import Chart from "../../components/chart/Chart"
import {pidrozdilData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useContext, useEffect , useState } from "react";
import { PidrozdilContext } from "../../context/pidrozdilContext/PidrozdilContext";

export default function Pidrozdil() {
    const { categories, dispatch: dispatchCatgorie } = useContext(PidrozdilContext);

    const [pidrozdil, setTransaction] = useState(null)

    const { dispatch } = useContext(PidrozdilContext)

    const handleChange = (e) => {
        const value = e.target.value;
        setTransaction({ ...pidrozdil, [e.target.name]: value });
    };

    const hedleSelect = (e) => {
        const value = e.target.value;
        setTransaction({ ...pidrozdil, [e.target.name]: value });
    };

    console.log(pidrozdil);


  return (
    <div className="pidrozdil">
      <div className="pidrozdilTitleContainer">
        <h1 className="pidrozdilTitle">Назва Факультету</h1>
        <Link to="/newpidrozdil">
          <button className="pidrozdilAddButton">Create</button>
        </Link>
      </div>
      <div className="pidrozdilTop">
          <div className="pidrozdilTopLeft">
              <Chart data={pidrozdilData} dataKey="Середея оцінка" title="Середня оцінка викладачів"/>
          </div>
          <div className="pidrozdilTopRight">
              <div className="pidrozdilInfoTop">
                  <img src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png" alt="" className="pidrozdilInfoImg" />
                  <span className="pidrozdilName">Назва Факультету</span>
              </div>
              <div className="pidrozdilInfoBottom">
                  <div className="pidrozdilInfoItem">
                      <span className="pidrozdilInfoKey">id:</span>
                      <span className="pidrozdilInfoValue">11223</span>
                  </div>
                  <div className="pidrozdilInfoItem">
                      <span className="pidrozdilInfoKey">Кількість студентів:</span>
                      <span className="pidrozdilInfoValue">200</span>
                  </div>
                  <div className="pidrozdilInfoItem">
                      <span className="pidrozdilInfoKey">Кількість викладачів</span>
                      <span className="pidrozdilInfoValue">14</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="pidrozdilBottom">
          <form className="pidrozdilForm">
              <div className="pidrozdilFormLeft">
                  <label>Викладачі</label>
              </div>    
              <div className="pidrozdilFormRight">
                  <div className="pidrozdilUpload">
                      <img src="https://play-lh.googleusercontent.com/9XKD5S7rwQ6FiPXSyp9SzLXfIue88ntf9sJ9K250IuHTL7pmn2-ZB0sngAX4A2Bw4w" alt="" className="pidrozdilUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="pidrozdilButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
