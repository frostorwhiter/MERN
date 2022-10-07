import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./teacher.css";

export default function Teacher() {
  return (
    <div className="teacher">
      <div className="teacherTitleContainer">
        <h1 className="teacherTitle">Edit Teacher</h1>

      </div>
      <div className="teacherContainer">
        <div className="teacherShow">
          <div className="teacherShowTop">
            <img
              src="https://kim.pnu.edu.ua/wp-content/uploads/sites/58/2018/06/cropped-logo-e1528979752421-1.png"
              alt=""
              className="teacherShowImg"
            />
            <div className="teacherShowTopTitle">
              <span className="teacherShowTeachername">Anna Becker</span>
              <span className="teacherShowTeacherTitle">Software Engineer</span>
            </div>
          </div>
          <div className="teacherShowBottom">
            <span className="teacherShowTitle">Деталі про викладача</span>
            <div className="teacherShowInfo">
              <PermIdentity className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">annabeck99</span>
            </div>
            <div className="teacherShowInfo">
              <CalendarToday className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">10.12.1999</span>
            </div>
            <span className="teacherShowTitle">Contact Details</span>
            <div className="teacherShowInfo">
              <PhoneAndroid className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="teacherShowInfo">
              <MailOutline className="teacherShowIcon" />
              <span className="teacherShowInfoTitle">annabeck99@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="teacherUpdate">
          <span className="teacherUpdateTitle">Редагувати</span>
          <form className="teacherUpdateForm">
            <div className="teacherUpdateLeft">
              <div className="teacherUpdateItem">
                <label>Teachername</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="teacherUpdateInput"
                />
              </div>
              <div className="teacherUpdateItem">
                <label>Повне імя</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="teacherUpdateInput"
                />
              </div>
              <div className="teacherUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="#########@gmail.com"
                  className="teacherUpdateInput"
                />
              </div>
              <div className="teacherUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="teacherUpdateInput"
                />
              </div>
            </div>
            <div className="teacherUpdateRight">
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
              <button className="teacherUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
