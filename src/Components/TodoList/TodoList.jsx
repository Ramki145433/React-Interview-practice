import { useState } from "react";
import "./TodoList.css"

export default function TodoList() {

    const initialTasks = [
        { id: 1, title: "Learn React", isComplete: false },
        { id: 2, title: "Practice Machine Coding", isComplete: false },
        { id: 3, title: "Apply for Jobs", isComplete: false },
    ];

    const [tasks, setTasks] = useState(initialTasks)

    const handleClick = (task) => {
        setTasks((prev) => prev.map((item) => item.id === task.id ? {...item, isComplete : !item.isComplete} : item))
    }

    const handleMarkAll = () => {
        setTasks((prev) => prev.map((item) => {
            return (
                {...item, isComplete : true}
            )
        }));
    }

    const handleReset = () => {
        setTasks((prev) => prev.map((item) => {
            return (
                {...item, isComplete : false}
            )
        }));
    }

    return <div className="holder">
        <h1>Todo List</h1>
        <p style={{fontSize : "20px", color : "green"}}>Completed Count {tasks.filter((item) => item.isComplete).length} / Total Count {tasks.length} </p>
        <div className="list-container">
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index} style={{display : "flex"}}>
                            <h2 className="task-heading" style={{ textDecoration: task.isComplete ? "line-through" : "none", cursor: "pointer", color: task.isComplete ? "red" : "black", marginRight : "16px" }} onClick={() => handleClick(task)}>{task.title}</h2>
                            {
                                task.isComplete ? <p style={{fontSize : "24px", marginTop : "16px"}}>🥳</p> : null
                            }
                        </div>
                    )
                })
            }
        </div>
        <button className="mark-all" onClick={handleMarkAll}>Mark All</button>
        <button className="mark-all" onClick={handleReset}>Reset All</button>
    </div>
}