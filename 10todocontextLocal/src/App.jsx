import { useEffect, useState } from "react"
import './App.css'
import { TodoProvider } from "./contexts/todo"
import { TodoForm } from "./components"
import { TodoItem } from "./components"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  //for update we use map function and pass default at the end 

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  //for delete we use filter for better optimization

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? 
      {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  //so now we have to store some data in local storage of browser so we can direct access it
  //now the local str set and get values as string so passing any object through is trys this String() method to convert that is not working in case of json so we have to specify the json.strigify property.

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    //to get item in json format

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* todo form */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* todo array of items */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo = {todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
