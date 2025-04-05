import {createStore} from "redux"

let initialState = {
    balance : 0,
    mobileNumber : null,
    name : ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "Deposit":
            return {...state, "balance" : state.balance + parseInt(action.payload)}
        case "Withdraw":
            return {...state, "balance" : state.balance - action.payload}
        case "updateName":
            return {...state, "name" : action.payload}
        case "updateMobile":
            return {...state, "mobileNumber" : action.payload}
        case "reset":
            return initialState
        default:
            return state
    }
}

let store = createStore(reducer)

// console.log(store.getState())
// store.dispatch({type : "Deposit", payload : 1000})

// console.log(store.getState())
// store.dispatch({type : "Withdraw", payload : 100})

// console.log(store.getState())
// store.dispatch({type : "updateName", payload : "Ramki"})

// console.log(store.getState())
// store.dispatch({type : "updateMobile", payload : 987654321})

// console.log(store.getState())

export default store