import React, {useEffect, useState} from 'react'
import "./Otp.css"
const Otp = ({size = 6, onSubmit}) => {
    const [otpValues, setOtpValues] = useState(() => {
        return Array(size).fill("")
    })
    // it focuses to next element if there is sibling to current element
    const focusNext = (currentElement) => {
        currentElement?.nextElementSibling?.focus()
    }

    const focusPrevious = (currentElement) => {
        currentElement?.previousElementSibling?.focus()
    }

    const focusNexttoNext = (currentElement) => {
        if (currentElement?.nextElementSibling?.nextElementSibling) {
            currentElement.nextElementSibling.nextElementSibling.focus()
        } else {
            focusNext(currentElement)
        }
    }

    const handleNumericInput = (event) => {
        // input value what we are entered
        const inputValue = Number(event.key);
        const inputElement = event.target;
        // if its not a number
        if (isNaN(inputValue)) return;
        // taking a index
        const index = Number(inputElement.id);
        if (otpValues[index].length === 0) {
            setOtpValues((prev) => {
                const existingValues = [...prev];
                existingValues[index] = inputValue
                return existingValues
            })
            focusNext(inputElement)
        } else {
            // when there's a digit in current index
            const cursorIndex = inputElement.selectionStart;
            console.log(cursorIndex)
            if (cursorIndex === 0) {
                setOtpValues((prev) => {
                    const newvalues = [...prev]
                    if (index < size - 1) {
                        newvalues[index + 1] = prev[index]
                    }
                    newvalues[index] = inputValue.toString();
                    return newvalues
                })
                focusNexttoNext(inputElement)
            } else if(index + 1 < size) {
                setOtpValues((prev) => {
                    const newValues = [...prev]
                    newValues[index + 1] = inputValue.toString()
                    return newValues
                })
                focusNexttoNext(inputElement)
            }
        }
    }

    const handleBackSpace = (event) => {
        console.log(event.key)
        if (event.key === "Backspace") {
            const index = Number(event.target.id);
            setOtpValues((prev) => {
                const newValues = [...prev]
                newValues[index] = ""
                return newValues
            });
            focusPrevious(event.target)
        }
    }

    const handleArrows = (event) => {
        if (event.key === "ArrowRight") {
            focusNext(event.target)
        } else if (event.key === "ArrowLeft") {
            focusPrevious(event.target)
        }
    }

    const keyUp = (event) => {
        handleNumericInput(event)
        handleBackSpace(event)
        handleArrows(event)
    }

    useEffect(() => {
        let isValid = true;
        otpValues.forEach((item) => {
            if (item.length === 0) isValid = false;
        })
        isValid && onSubmit(otpValues)
    }, [otpValues])
  return (
    <div className='container'>
        <div className='otp-container'>
              {
                  otpValues.map((otpNum, index) => {
                      return (
                          <input id={index.toString()} value={otpNum} key={index.toString()} onKeyUp={keyUp} maxLength={1}/>
                      )
                  })
              }
        </div>
    </div>
  )
}

export default Otp
