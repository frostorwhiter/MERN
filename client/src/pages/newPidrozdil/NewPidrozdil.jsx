import "./newPidrozdil.css";

export default function NewPidrozdil() {
  return (
    <div className="newPidrozdil">
      <h1 className="addPidrozdilTitle">Новий Факультет</h1>
      <form className="addPidrozdilForm">
        <div className="addPidrozdilItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addPidrozdilItem">
          <label>Назва</label>
          <input type="text" placeholder="Назва Факультету" />
        </div>
        <button className="addPidrozdilButton">Створити</button>
      </form>
    </div>
  );
}
