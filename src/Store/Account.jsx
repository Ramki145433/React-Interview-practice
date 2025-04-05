import React from 'react'
import { useSelector } from 'react-redux'
import "./Store.css"

const Account = () => {
    let data = useSelector((state) => {
        return state;
    })
    console.log(data)
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
                <td>{data.account.balance}</td>
                <td>{data.account.name}</td>
                <td>{data.account.mobileNumber}</td>
            </tr>
        </tbody>
      </table>
    
        <h2>Transaction Details</h2>

      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                data.transaction.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.amount}</td>
                            <td>{item.type}</td>
                            <td>{item.date.toString()}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Account
