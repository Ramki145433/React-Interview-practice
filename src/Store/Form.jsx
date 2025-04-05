import React, { use, useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Store.css"

const Form = () => {
    const [amount, setAmount] =  useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    let dispatch = useDispatch();
  return (
    <div style={{padding : "2rem"}}>
      <div className="first">
        <input type="number" placeholder='Enter Amount' 
        value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={() => {
            dispatch({"type" : "Deposit", "payload" : amount});
            setAmount("")
        }} >Deposit</button>
        <button onClick={() => {
            dispatch({"type" : "Withdraw", "payload" : amount});
            setAmount("")
        }}>Withdraw</button>
      </div>

      <div className="name">
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name}/>
        <button onClick={() => {
            dispatch({"type" : "updateName", "payload" : name});
            setName("")
        }}>Add Name</button>
      </div>

      <div className="mobile">
        <input type="tel" placeholder='Enter Mobile Number' onChange={(e) => setMobile(e.target.value)} value={mobile}/>
        <button onClick={() => {
            dispatch({"type" : "updateMobile", "payload" : mobile});
            setMobile("")
        }}>Add Mobile</button>
      </div>

      <div><button onClick={() => {dispatch({"type" : "reset"})}}>Reset</button></div>
    </div>
  )
}

export default Form
