import { useState } from "react";


const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);

function TimeDropdown({ label, value, onChange }) {
  const [hour, minute] = value.split(":");
  return (
    <div>
      <label>{label}</label>
      <select
        value={hour}
        onChange={(e) => onChange(`${e.target.value}:${minute}`)}
      >
        {hours.map((hr, index) => (
          <option key={hr} value={hr}>
            {hr}
          </option>
        ))}
      </select>

      <select
        value={minute}
        onChange={(e) => onChange(`${hour}:${e.target.value}`)}
      >
        {minutes.map((min, index) => (
          <option key={min} value={min}>
            {min}
          </option>
        ))}
      </select>
    </div>
  );
}

function Timer({ id, removeRow, updateRow, values }) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="dayContainer">
      <label>Day : </label>
      <select
        value={values.day}
        onChange={(e) => updateRow(id, "day", e.target.value)}
      >
        <option>Select</option>
        {days.map((day, index) => {
          return (
            <option key={index} value={day}>
              {day}
            </option>
          );
        })}
      </select>

      <TimeDropdown
        label="Start"
        value={values.start}
        onChange={(val) => updateRow(id, "start", val)}
      />

      <TimeDropdown
        label="End"
        value={values.end}
        onChange={(val) => updateRow(id, "end", val)}
      />

      <button onClick={() => removeRow(id)}>❌</button>
    </div>
  );
}

function AppTimer() {
  const [rows, setRows] = useState([]);
  console.log(rows);
  function handleAdd() {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        day: "",
        start: "00:00",
        end: "00:00",
      },
    ]);
  }

  function clearAll() {
    setRows([]);
  }

  function removeRow(id) {
    setRows((prev) => {
      return prev.filter((row) => row.id !== id);
    });
  }

  function updateRow(id, field, value) {
    console.log(id, field, value);
    let updatingRows = rows.map((r, i) =>
      r.id === id ? { ...r, [field]: value } : r
    );
    console.log(updatingRows);
    setRows(updatingRows);
  }

  return (
    <div className="App">
      <div className="btnContainer">
        <button onClick={handleAdd}>AddNew</button>
        <button onClick={clearAll}> ClearAll</button>
      </div>

      <div className="rowCom">
        {rows.map((row) => (
          <Timer
            id={row.id}
            removeRow={removeRow}
            updateRow={updateRow}
            values={row}
          />
        ))}
      </div>
    </div>
  );
}

export default AppTimer
