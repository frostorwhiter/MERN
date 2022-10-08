import "./question.css";

export default function Question() {
  return (
    <div className="question">
      <div className="questionTitleContainer">
        <h1 className="questionTitle">Питання</h1>
        <button className="questionUpdateButton">Update</button>
      </div>
      <div className="questionTop">
          <div className="questionTopRight">
          <div className="questionUpdateItem">
            <label>Phone</label>
            <input
                  type="text"
                  placeholder="Текст Питання"
                  className="questionUpdateInput"
            />
            </div>
          </div>
      </div>
    </div>
  );
}
