import React, {useState} from 'react'
import "./Dropdown.css"
const Dropdown = () => {
    let options = ["None", 
    "Alcohol / Wine shops and bars",
    "Cable TV operators",
    "Real estate businesses",
    "Money Lenders",
    "Chit Fund Operators",
    "STD Booth",
    "Pawn brokers"]

    const [btnFlag, setBtnFlag] = useState(false)
    const [blockFlag, setBlockFlag] = useState(false)
    const [ddOptions, setDdOptions] = useState(options)
    const [value, setvalue] = useState("")
    const handleChange = (e) => {
        let val = e.target.value;
        if (val) {

            let filterword = ddOptions.filter((item) => item.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
            setDdOptions(filterword)
        } else {
            setDdOptions(options)
        }
    }
    const handleBtnClick = () => {
        setBtnFlag(!btnFlag)
        setBlockFlag(!blockFlag)
    }
  return (
    <div className="outer">
        <div className='main-container'>
            {
                btnFlag ? 
                <div style={{position : "relative"}} onClick={() => setBlockFlag(!blockFlag)}>
                    <input type="text" placeholder='Negative Occupation' className='input-field' value={value}/>
                    <span className='down-arrow'>🔽</span>
                </div> : 
                <div className="container">
                    <h1 className='heading' id='heading'>Negative Occupation</h1>
                    <label htmlFor="heading">{value ? value : "Select"}</label>
                </div>
            }
        
            <button onClick={handleBtnClick}>{!btnFlag ? "EDIT" : "SAVE"}</button>
        </div>
        {
                blockFlag &&  
                <div className="dropdown-container" > 
                    <input type="text" className='input-field-dd' onChange={handleChange}/>
                    <div style={{border : "1px solid"}}>
                        {
                            ddOptions.map((item, index) => {
                                return (
                                <h3 key={index} style={{cursor : "pointer"}} onClick={() => setvalue(item)}>{item}</h3>
                                )
                            })
                        }
                    </div>
                </div>
            }
    </div>
    
  )
}

export default Dropdown
