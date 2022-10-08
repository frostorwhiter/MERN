import "./featuredInfo.css";
import React from 'react'
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
      <img
              src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png"
              alt=""
              className="Teacherimg"
            />
        <div className="featuredRatingContainer">
          <span className="featuredRating">Ім'я викладача</span>
        </div>
        <span className="featuredSub">Кафедра Назва</span>
      </div>
    </div>
  );
}
