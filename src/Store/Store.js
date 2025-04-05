import {combineReducers, createStore, applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

let initialState = {
    balance : 0,
    mobileNumber : null,
    name : ""
}

function accountReducer(state = initialState, action) {
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

function transactionReducer (state = [], action) {
    switch (action.type) {
        case "ADD_TRANSACTION" :
            return ([...state, {id : action.payload.id, amount : action.payload.amount,
                 type : action.payload.type, date : action.payload.date}])
        default:
            return state
    }
}

function middlewareReducer (state = {}, action) {
    switch (action.type) {
        case "middleware" :
            return {...state, id : action.payload.id, body : action.payload.body, title : action.payload.title}
        default:
            return state
    }
}

let rootReducer = combineReducers({
    account : accountReducer,
    transaction : transactionReducer,
    middleware : middlewareReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

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