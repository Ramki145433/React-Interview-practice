import React, { useId, useState } from 'react'
import "./Cricle.css"

const GenarateCircle = () => {
    const [circles, setCircles] = useState([])

    console.log(circles)

    const id = useId()
    function handleAddCircle() {
        setCircles((prev) => ([
            ...prev, {
                id : id + "-" + prev.length, 
                isGray : false
            }
        ]))
    }

  function handleCircleClick(clickedId) {
    setCircles((prev) =>
      prev.map((circle) =>
        circle.id === clickedId
          ? { ...circle, isGray: !circle.isGray }
          : circle
      )
    );
  }

  return (
    <div className='container'>
      <button onClick={() => handleAddCircle()} style={{"marginRight" : "16px"}}>Add Circle</button>
      <p>Gray colour circle count : {circles.filter((item) => item.isGray).length}</p>
      {
        circles.map((element, index) => {
            return <div>
                <div key={index} className='makeCircle' style={{"background" :  element.isGray ? "gray" : "white"}} onClick={ () => handleCircleClick(element.id)}>

                </div>
            </div>
        })
      }
    </div>
  )
}

export default GenarateCircle
