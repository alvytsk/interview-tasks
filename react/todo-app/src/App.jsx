import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    console.log(todos);
  }, [todos])

  const handleAddTodo = () => {
    if(!text) return;
    setTodos(prev => [...prev, {
      id: prev.length + 1,
      text,
      done: false
    }])
    setText('')
  }

  const handleText = (e) => {
    const text = e.target.value;
    setText(text)
  }

  const handleDone = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
  }

  return (
      <div>
        {
          todos.map((item) => (
            <div key={item.id} className={`todo-item ${item.done ? 'done' : ''}`}>
              {item.text} 
              <input type="checkbox" value={item.done} onChange={() => handleDone(item.id)}/>
            </div>
          ))
        }

        <input
          type="text"
          value={text}
          onChange={handleText}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
  )
}

export default App
