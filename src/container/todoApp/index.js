import React, { useState } from 'react'
import Todo from '../../components/todo'
import AddTodo from '../../components/addTodo'
import LoadMore from '../../components/loadMore'
import { setTodosToLocal, getTodosFromLocal, showNotification } from '../../utility'
import { emitter } from '../../components/backdrop'
import Search from '../../components/search'

const AppContainer = () => {
    const MAX_SHOW = 4
    const [todos, setTodos] = useState(() => getTodosFromLocal())
    const [rowsLast, setRowLast] = useState(MAX_SHOW)
    const addTodo = (title, description) => {
       showNotification("Task created successfully")
        const newTodos = [{ id: Math.random(), name: title, description, completed: false }, ...todos]
        setTodos(newTodos)
        setTodosToLocal(newTodos)
    }
    const showMoreClicked = () => {
       emitter.emit("PROCESSING")
        setRowLast(rowsLast + MAX_SHOW)
    }

    const deleteTodo = (id) => {
        showNotification("Task deleted successfully")
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
        setTodosToLocal(newTodos)
    }

    const completeTask = (id) => {
        showNotification("Task completed successfully")
        const newTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(newTodos)
        setTodosToLocal(newTodos)
    }

    return <div style={{ maxWidth: "1000px", minWidth: 300, margin: "20px auto",padding:"0 5px" }}>
        <h1 align="center">My Todos</h1>
        <AddTodo addTodo={addTodo} />
{/* <Search/> */}
        <div style={{ maxHeight: 400, overflow: "auto" }}>
            {todos.length > 0 ? todos.slice(0, rowsLast).map(todo =>
                <Todo todo={todo} deleteTodo={deleteTodo} completeTask={completeTask} />) :
             <p align="center">Add todo to display here :)</p>}

            {todos.length > MAX_SHOW && rowsLast < todos.length ?
                <LoadMore length={todos.length - rowsLast} showMore={showMoreClicked} /> : null}
        </div>
    </div>
}
export default AppContainer 