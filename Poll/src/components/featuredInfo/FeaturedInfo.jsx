import "./featuredInfo.css";
import React from 'react'
import { TeacherContext } from "../../context/teacherContext/TeacherContext";
import { useContext, useEffect } from "react";

export default function FeaturedInfo(props) {
  const { teachers, dispatch } = useContext(TeacherContext);
  return (
    <div className="featured">
      <div className="featuredItem">
      <img
              src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png"
              alt=""
              className="Teacherimg"
            />
        <div className="featuredRatingContainer">
          <span className="featuredRating" name="teachername">{teachers.teachernameid}</span>
        </div>
        <span className="featuredSub">Кафедра Назва</span>
      </div>
    </div>
  );
}
