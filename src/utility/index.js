import { emitter } from "../components/backdrop"
import { alertEmitter } from "../components/alert"

export const setTodosToLocal=(todos)=>{
    localStorage.setItem("todos",JSON.stringify(todos))
}

export const getTodosFromLocal=()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    return todos?todos:[]
}
 String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export const showNotification=(msg)=>{
    emitter.emit("PROCESSING")
    alertEmitter.emit("NOTIFICATION",msg)
}