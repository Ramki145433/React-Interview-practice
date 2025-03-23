import React, { useState } from 'react'
import "./DndSample.css"

const DndSample = () => {
    const [position, setPosition] = useState({x: 100, y: 100})
    const [dragging, setDragging] = useState(false)
    const [notes, setNotes] = useState([
            {
                id : 1,
                text : "Learning Data Science"
            },
            {
                id : 2,
                text : "Learning Python"
            },
            {
                id : 3,
                text : "Learning Javascript"
            }
        ])
    const handleMouseDown = () => {
        setDragging(true)
        console.log(dragging)
    }
    const hanldeMouseMove = (e) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - 50,
            y: e.clientY - 50,
        })
        console.log(position)
    }
    const handleMouseUP = () => {
        setDragging(false)
    }           
  return (
    <div className='drag-container' onMouseMove={(e) => hanldeMouseMove(e)} onMouseUp={handleMouseUP}>
      {/* <div className="draggable"
      onMouseDown={handleMouseDown}
      style={{
        left:`${position.x}px`,
        top: `${position.y}px`
      }}
      >
        DragMe
      </div> */}
      {
        notes.map((note) => {
            return (
                <div className="draggable"
                key={note.id}
                onMouseDown={handleMouseDown}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
                >
                    📌 {note.text}
                </div>
            )
        })
      }
    </div>
  )
}

export default DndSample
