import { useState } from "react"
import "./Chess.css"
export default function Chess({BoardSize = 8}) {
    let chessMatrix = Array(BoardSize).fill(0).map((_,rowIndex) => Array(BoardSize).fill(0)
    .map((_,colIndex) => ((rowIndex + colIndex) % 2 === 0 ? "black" : "white")))
    console.log(chessMatrix)
    const [selectedPosition, setSelectedPosition] = useState(null);
    function getBishopMoves(row, col) {
        let moves = new Set();
        moves.add(`${row}-${col}`)
        for(let i = 1; i <= BoardSize; i++) {
            // for --
            if((row - i) >= 0 && (col - i) >= 0) moves.add(`${row-i}-${col-i}`)
            // for -+
            if((row - i) >= 0 && (col + i) < BoardSize) moves.add(`${row-i}-${col+i}`)
            // for +-
            if((row + i) < BoardSize && (col - i) >= 0) moves.add(`${row+i}-${col-i}`)
            // for ++
            if((row + i) < BoardSize && (col + i) < BoardSize) moves.add(`${row+i}-${col+i}`)
        }
    console.log(moves)
    return moves
    }
    const handleClick = (r,c) => {
        console.log(r,c)
        setSelectedPosition(getBishopMoves(r,c))
        // console.log(selectedPosition)
    }
    const handleLeave = () => {
        setSelectedPosition(null)
    }
    return <>
    <div>
        <h1>Chess Board</h1>
        {
            chessMatrix.map((row, rowIndex) => (
                <div className="chess_row" key={rowIndex}>
                   {
                    row.map((color, colIndex) => {
                        const isMoveHighlightned = selectedPosition?.has(`${rowIndex}-${colIndex}`)
                        // why this question mark, initially there wont be any selectedposition set thats why. we have to check. Otherwise will face issue.
                        return (
                            (
                                
                                <div className= {`chess_col ${color}`} key={colIndex} 
                                style={{cursor:"pointer", "backgroundColor" : isMoveHighlightned ? "red" : null}} 
                                // onClick={() => handleClick(rowIndex,colIndex)}
                                // Hovered feature
                                onMouseEnter={() => handleClick(rowIndex, colIndex)}
                                onMouseLeave={handleLeave}>
                                
                                </div>
                            )
                        )
                    })
                   }
                </div>
            ))
        }
    </div>
    </>
}