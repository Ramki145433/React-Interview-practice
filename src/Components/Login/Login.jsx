import React, { useState } from 'react'
import "./Login.css"


const Login = () => {
    const [fieldValues, setFieldValues] = useState({ "email": "", "password": "" })
    const [errorValues, setErrorValues] = useState({ "emailError": "", "passwordError": "" })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFieldValues((prev) => {
            return (
                {...prev, [e.target.type] : e.target.value}
            )
        })
        // console.log(fieldValues)
    }

    const validateForm = () => {
        console.log(fieldValues)
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let valid = true;
        if (!emailRegex.test(fieldValues.email)) {
            setErrorValues((prev) => {
                return (
                    {...prev, "emailError" : "Invalid Email"}
                )
            })
            valid = false;
        } else {
            setErrorValues((prev) => {
                return (
                    {...prev, "emailError" : ""}
                )
            })
        }
        if (fieldValues.password.length <= 5) {
            setErrorValues((prev) => {
                return (
                    {...prev, "passwordError" : "Password Length Should Be Minimum 6"}
                )
            })
            valid = false;
        } else {
            setErrorValues((prev) => {
                return (
                    {...prev, "passwordError" : ""}
                )
            })
        }
        console.log(valid)
        return valid;
    }

    const handleLogin = () => {
        if (validateForm()) {
            setLoading(true)
            
            alert("Login successfull")
        }
    }

  return (
    <div className='login-holder'>
        <h1>Login From</h1>
        <div className="email-field">
              <input type="email" value={fieldValues.email} onChange={handleChange} style={{border : errorValues.emailError ? "1px solid red" : "1px solid black"}}/>
              {
                  errorValues.emailError && <p style={{color : "red"}}>{errorValues.emailError}</p>
              }
        </div>
        <div className="password-field">
              <input type="password" value={fieldValues.password} onChange={(e) => handleChange(e)} style={{border : errorValues.passwordError ? "1px solid red" : "1px solid black"}}/>
              {
                  errorValues.passwordError && <p style={{color : "red"}}>{errorValues.passwordError}</p>
              }
          </div>
          <div className="login-btn">
              <button onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login