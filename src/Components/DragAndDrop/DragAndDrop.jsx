import React, { useState } from 'react'
import Messages from './Messages'
const DragAndDrop = () => {
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
  return (
    <div>
     <Messages notes={notes} setNotes={setNotes}/>
    </div>
  )
}
 
export default DragAndDrop
