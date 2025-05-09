import { useState, useId } from "react";
import "./styles.css";

export default function Circle() {
  const [circleCount, setCircleCount] = useState([]);
  const baseId = useId(); // just a string

  function handleAddCircle() {
    setCircleCount((prev) => [
      ...prev,
      {
        id: baseId + "-" + (prev.length + 1),
        isGray: false,
      }
    ]);
  }

  function handleClick(clickedId) {
    setCircleCount((prev) =>
      prev.map((circle) =>
        circle.id === clickedId
          ? { ...circle, isGray: !circle.isGray }
          : circle
      )
    );
  }

  return (
    <div className="App">
      <button onClick={handleAddCircle}>Add Circle</button>
      <p>Gray color count: {circleCount.filter((c) => c.isGray).length}</p>
      {circleCount.map((circle) => (
        <div key={circle.id}>
          <div
            className="makeCircle"
            onClick={() => handleClick(circle.id)}
            style={{
              background: circle.isGray ? "gray" : "white"
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
