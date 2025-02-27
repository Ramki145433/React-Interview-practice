import React, { useState } from 'react';
import './Chess.css';

export default function ChessSecondApproach({ BoardSize = 8 }) {
  let matrix = Array(BoardSize)
    .fill(0)
    .map((_, rowIndex) =>
      Array(BoardSize)
        .fill(0)
        .map((_, colIndex) =>
          (rowIndex + colIndex) % 2 === 0 ? 'black' : 'white'
        )
    );
    console.log(matrix)
  const [selectedSquare, setSelectedSquare] = useState(null);
  const getSquareColor = (row, col) => {
    if (!selectedSquare) return null;
    const [hrow, hcol] = selectedSquare;
    if (hrow === row && hcol === col) return 'lightBlue';
    if (Math.abs(hrow - row) === Math.abs(hcol - col)) return 'red';
  };
  const handleEnter = (row, col) => {
    console.log([row, col]);
    setSelectedSquare([row, col]);
  };
  const handleLeave = () => {
    setSelectedSquare(null);
  };
  return (
    <div className="chess-board">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((color, colIndex) => {
            return (
              <div
                className={`square ${color}`}
                key={`${rowIndex}-${colIndex}`}
                style={{ backgroundColor: getSquareColor(rowIndex, colIndex) }}
                onMouseEnter={() => handleEnter(rowIndex, colIndex)}
                onMouseLeave={handleLeave}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
}