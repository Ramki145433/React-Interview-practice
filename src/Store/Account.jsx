import React from 'react'
import { useSelector } from 'react-redux'
import "./Store.css"

const Account = () => {
    let data = useSelector((state) => {
        console.log(state)
        return state;
    })
  return (
    <div style={{padding : "2rem"}}>
      <h2>Account Detials</h2>
      <table>
        <thead>
            <tr>
                <th>Balance</th>
                <th>User Name</th>
                <th>Mobile</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data.balance}</td>
                <td>{data.name}</td>
                <td>{data.mobileNumber}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Account
