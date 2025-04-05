export function deposit(amount) {
    return {"type" : "Deposit", "payload" : amount}
}

export function withdraw(amount) {
    return {"type" : "Withdraw", "payload" : amount}
}

export function updateName(name) {
    return {"type" : "updateName", "payload" : name}
}

export function updateMobile(mobile) {
    return {"type" : "updateMobile", "payload" : mobile}
}

export function reset() {
    return {"type" : "reset"}
}