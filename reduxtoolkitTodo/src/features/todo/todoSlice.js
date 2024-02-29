import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";


const initialState = {
    todos: [{ id: nanoid(), text: "Hello World!" }],
    editMode: false,
    tempId: "",
}
//in this bracket is the state and action is given upon being called

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                //if the prop and syntax match you dont have to write it 
                //ex text: action.payload.text  write text: action.payload only 
                // initialState: initialState  write initialState, only
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload[0] ? { ...todo, text: action.payload[1] } : todo)
            state.tempId = ""
        },
        toggleEditMode: (state, action) => {
            state.editMode ? state.editMode = false : state.editMode = true 
            console.log(state.editMode);
        },
        setTempId: (state, action) => {
            state.tempId = action.payload
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleEditMode, setTempId } = todoSlice.actions
//for components

export default todoSlice.reducer
//for store purpose