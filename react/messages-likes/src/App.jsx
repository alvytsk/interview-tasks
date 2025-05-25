import React, { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  const handleAddMsg = () => {
    setMessages((prev) => [...prev, {id: messages.length + 1, text, likes: 0}])
    setText('')
  }

  const handleLike = useCallback((id) => {
    setMessages(prev => {
      const updatedMessages = prev.map(msg =>
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg
      )
      return updatedMessages
    })
  }, [])

  return (
    <div>
      <h1>TotalLikes: {messages.reduce((acc, i) => acc + i.likes, 0)}</h1>
      
      <MsgList messages={messages} handleLike={handleLike} />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAddMsg}
      >
        Add
      </button>
    </div>
  )
}

const MsgList = ({messages, handleLike}) => {
  return (
    <div>
      {
        messages.map(({id, text, likes}) => (
          <MsgItem key={id} msg={{id, text, likes}} handleLike={handleLike} />
        ))
      }
    </div>
  )
}

const MsgItem = React.memo(({msg, handleLike}) => {
  const {id, text, likes} = msg
  
  console.log('render', id)

  return (
    <div>
      {text} {likes} {" "} <button onClick={() => handleLike(id)}>Like</button>
    </div>
  )
}, (prevProps, nextProps) => {
  // Сравниваем количество лайков, если они не изменились, то не ререндерим компонент
  return prevProps.msg.likes === nextProps.msg.likes;
})

export default App
