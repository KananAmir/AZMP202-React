import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, setFilterValue, toggleTodo, setSearchQuery, clearAllTodos } from '../../redux/features/todoSlice'

const Todo = () => {
    const [inputVal, setInputVal] = useState("")
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    console.log(todos);

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputVal.trim()))

        setInputVal("")
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }


    const filteredTodosBySelect = todos.items.filter((todo) => {
        switch (todos.filter) {
            case "completed":
                return todo.isCompleted
            case "pending":
                return !todo.isCompleted
            default:
                return todo
        }
    })

    const filteredTodos = filteredTodosBySelect.filter((todo) => todo.text.toLowerCase().includes(todos.searchQuery))


    return (
        <>
            <div>
                <form onSubmit={handleAddTodo}>
                    <input type="text" name="" id="" onChange={(e) => { setInputVal(e.target.value) }} value={inputVal} />
                    <button>add</button>
                </form>
                <hr />

                <div>
                    <select name="" id="" onChange={(e) => { dispatch(setFilterValue(e.target.value)) }}>
                        <option value="all">All Todos</option>
                        <option value="completed">Completed Todos</option>
                        <option value="pending">Pending Todos</option>
                    </select>
                    <input type="search" placeholder='search...' onChange={(e) => { dispatch(setSearchQuery(e.target.value.trim())) }} />
                    <button onClick={() => dispatch(clearAllTodos())}>Clear All Todos</button>
                </div>
                <ul style={{ listStyle: "none" }}>
                    {todos.items.length > 0 ? filteredTodos.map((todo) => {
                        return (<li key={todo.id}>
                            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.text}
                                <button onClick={() => { handleDeleteTodo(todo.id) }}>delete</button>
                                <button onClick={() => { dispatch(toggleTodo(todo.id)) }}>{!todo.isCompleted ? "mark as done" : "done"}</button>
                            </span>
                        </li>)
                    }) : <p style={{ color: "red" }}>There is no todos yet!</p>}
                </ul>
            </div>
        </>
    )
}

export default Todo