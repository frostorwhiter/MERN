import "./question.css";

export default function Question() {
  return (
    <div className="question">
      <div className="questionTitleContainer">
        <h1 className="questionTitle">Назва Факультету</h1>
        <button className="teacherUpdateButton">Update</button>
      </div>
      <div className="questionTop">
          <div className="questionTopRight">
          <div className="teacherUpdateItem">
            <label>Phone</label>
            <input
                  type="text"
                  placeholder="Текст Питання"
                  className="teacherUpdateInput"
            />
            </div>
          </div>
      </div>
    </div>
  );
}
