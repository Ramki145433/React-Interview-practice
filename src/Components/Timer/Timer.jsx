import React, { useId, useState } from "react";
import "./Timer.css";

const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday", "Sunday"
];

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

const TimeDropdown = ({ label, value, onChange }) => {
  const [hour, minute] = value.split(":");

  return (
    <>
      <label>{label}:</label>
      <select value={hour} onChange={(e) => onChange(`${e.target.value}:${minute}`)}>
        {hours.map((hr) => (
          <option key={hr} value={hr}>{hr}</option>
        ))}
      </select>
      <select value={minute} onChange={(e) => onChange(`${hour}:${e.target.value}`)}>
        {minutes.map((min) => (
          <option key={min} value={min}>{min}</option>
        ))}
      </select>
    </>
  );
};

const TimeRow = ({ id, onRemove, onChange, values }) => {
    // values represent row
  return (
    <div className="row">
      <label>Day:</label>
      <select
        value={values.day}
        onChange={(e) => onChange(id, "day", e.target.value)}
      >
        <option value="">Select</option>
        {days.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>

      <TimeDropdown
        label="Start"
        value={values.startTime}
        onChange={(val) => onChange(id, "startTime", val)}
      />

      <TimeDropdown
        label="End"
        value={values.endTime}
        onChange={(val) => onChange(id, "endTime", val)}
      />

      <button className="cancel-btn" onClick={() => onRemove(id)}>Cancel</button>
    </div>
  );
};

const Timer = () => {
  const [rows, setRows] = useState([]);
  const id = useId()
  const addNewRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: id(),
        day: "",
        startTime: "00:00",
        endTime: "00:00"
      }
    ]);
  };

  const removeRow = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const clearAll = () => {
    setRows([]);
  };

  const updateRow = (id, field, value) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  return (
    <div className="container">
      <div className="buttons">
        <button className="add-btn" onClick={addNewRow}>Add New</button>
        <button className="clear-btn" onClick={clearAll}>Clear All</button>
      </div>

      {rows.map((row) => (
        <TimeRow
          key={row.id}
          id={row.id}
          values={row}
          onRemove={removeRow}
          onChange={updateRow}
        />
      ))}
    </div>
  );
};

export default Timer;
