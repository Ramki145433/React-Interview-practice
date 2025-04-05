import React, { useState } from 'react'
import "./Checkbox.css"
const Checkbox = () => {
    const values = ["Collateral issue",
        "Manipulated Documents",
        "Negative location",
        "Negative Market Feedback",
        "Negative Profile",
        "Not Fitting Into Product Norms",
        "Others",
        "Poor CIBIL",
        "Poor Financials",
        "Poor living standards",
        "Poor Track Record",
        "Unjustified End Use",
        "Unjustified Limits"]
        const [listVal, setListVal] = useState(values)
        const [flag, setFlag] = useState(false)
        const [selectedOptions, setSelectedOptions] = useState([])
        const handleCheck = (val) => {
            setSelectedOptions([...selectedOptions,val.target.id])
        }
        const handleChange = (e) => {
            let val = e.target.value
            if(val) {
                let filteredValues = values.filter((item) => item.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
                setListVal(filteredValues)
            }else {
                setListVal(values)
            }
        }
        function handleFlag () {
            setFlag(!flag)
            console.log(flag)
        }
        function handleCross (val) {
            console.log(val)
            setFlag(true)
            let filteredSelected = selectedOptions.filter((item) => item.trim("") !== val.trim(""))
            setSelectedOptions(filteredSelected)
        }
  return (
    <div className='main-conatiner'>
      <div className="container1" onClick={handleFlag}>
            <div className="display-items">
                <h3 style={{marginLeft : "1rem"}}>Category of Reasons</h3>
                <div className='arrow'></div>
            </div>
            <div className="display-options">
                {
                    selectedOptions.map((item, index) => {
                        return (
                            <div key={index} className='selected-options'>
                                <p>{item}</p>
                                <span onClick={() => handleCross(item)}>❌</span>
                            </div>
                        )
                    })
                }
            </div>
      </div>
      <div className="container2" style={{
                visibility: flag ? "visible" : "hidden"
}}
>
        <div className="search">
            <input type="text" placeholder='Search' onChange={handleChange}/>
            <span className='icon'>🔍</span>
        </div>
        <div className="options">
            {
                listVal.map((item, index) => {
                    return (
                        <div className='option' key={index}>
                            <input type='checkbox' id={item} onChange={(e) => handleCheck(e)}/>
                            <label htmlFor={item}>{item}</label>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Checkbox
