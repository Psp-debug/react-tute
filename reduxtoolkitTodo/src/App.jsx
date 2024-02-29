import { useSelector } from "react-redux"
import './App.css'
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <AddTodo />
      <ul className="list-none">
        {todos.map((todo) => (

          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}>
            <Todos todo={todo} />
          </li>))}
      </ul>
    </>
  )
}

export default App
