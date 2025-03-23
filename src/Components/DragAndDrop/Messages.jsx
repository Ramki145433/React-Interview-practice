import React, { useEffect } from 'react'
import Message from './Message'

const Messages = ({notes=[], setNotes=(() => {})}) => {
    console.log(notes)
    const determineNewPosition = () => {
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;
        return {
            x : Math.floor(Math.random() * maxX),
            y : Math.floor(Math.random() * maxY)
        }
    }
    console.log(notes)
    useEffect(() => {
        // localStorage Logic
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const updatedNotes = notes.map((note) => {
            const savedNote = savedNotes.find((n) => n.id === note.id);
            if (savedNote) {
                return {...note, position: savedNote.position}
            } else {
                const position = determineNewPosition();
                return {...note, position}
            }
        })
        setNotes(updatedNotes)
        localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }, [notes.length])
      return (
    <div>
      {
        notes.map((item, index) => {
            console.log(item.position)
            return (
                <Message key={index} initialPosition={item.position} content={item.text}/>
            )
        })
      }
    </div>
  )
}

export default Messages
