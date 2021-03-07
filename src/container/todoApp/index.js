import React, { useState } from 'react'
import Todo from '../../components/todo'
import AddTodo from '../../components/addTodo'
import LoadMore from '../../components/loadMore'
import { setTodosToLocal, getTodosFromLocal } from '../../utility'

const AppContainer = () => {
    const MAX_SHOW = 4
    const [todos, setTodos] = useState(() => getTodosFromLocal())
    const [rowsLast, setRowLast] = useState(MAX_SHOW)
    const addTodo = (title, description) => {
        const newTodos = [{ id: Math.random(), name: title, description, completed: false }, ...todos]
        setTodos(newTodos)
        setTodosToLocal(newTodos)
    }
    const showMoreClicked = () => {
        setRowLast(rowsLast + MAX_SHOW)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
        setTodosToLocal(newTodos)
    }

    const completeTask = (id) => {
        const newTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        setTodos(newTodos)
        setTodosToLocal(newTodos)
    }

    return <div style={{ maxWidth: "1000px", minWidth: 300, margin: "20px auto" }}>
        <h1 align="center">My Todos</h1>
        <AddTodo addTodo={addTodo} />

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