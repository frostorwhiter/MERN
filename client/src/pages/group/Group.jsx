import { Link } from "react-router-dom";
import "./group.css";
import Chart from "../../components/chart/Chart"
import {groupData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import React from 'react'

export default function Group() {
    
  return (
    <div className="group">
      <div className="groupTitleContainer">
        <h1 className="groupTitle">Назва Група</h1>
        <Link to="/newgroup">
          <button className="groupAddButton">Create</button>
        </Link>
      </div>
      <div className="groupTop">
          <div className="groupTopLeft">
              <Chart data={groupData} dataKey="Середня оцінка" title="Середня оцінка викладачів"/>
          </div>
          <div className="groupTopRight">
              <div className="groupInfoTop">
                  <img src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png" alt="" className="groupInfoImg" />
                  <span className="groupName">Назва Групи</span>
              </div>
              <div className="groupInfoBottom">
                  <div className="groupInfoItem">
                      <span className="groupInfoKey">id:</span>
                      <span className="groupInfoValue">11223</span>
                  </div>
                  <div className="groupInfoItem">
                      <span className="groupInfoKey">Кількість студентів:</span>
                      <span className="groupInfoValue">200</span>
                  </div>
                  <div className="groupInfoItem">
                      <span className="groupInfoKey">Кількість викладачів</span>
                      <span className="groupInfoValue">14</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="groupBottom">
          <form className="groupForm">
              <div className="groupFormLeft">
                  <label>Викладачі</label>
              </div>    
              <div className="groupFormRight">
                  <div className="groupUpload">
                      <img src="https://play-lh.googleusercontent.com/9XKD5S7rwQ6FiPXSyp9SzLXfIue88ntf9sJ9K250IuHTL7pmn2-ZB0sngAX4A2Bw4w" alt="" className="groupUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="groupButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
