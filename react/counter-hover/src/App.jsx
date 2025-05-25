import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [hovered, setHovered] = useState(false)
  const hRef = useRef()
  const counterRef = useRef()
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (hovered)
        counterRef.current++;
      else
        setCounter((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [hovered])

  const onMouseEnter = useCallback(() => {
    console.log('onMouseEnter')
    counterRef.current = counter;
    setHovered(true)
  }, [counter])

  const onMouseLeave = useCallback(() => {
    console.log('onMouseLeave')
    setCounter(counterRef.current);
    setHovered(false)
  }, [])

  useEffect(() => {
    hRef.current.addEventListener('mouseover', onMouseEnter);
    hRef.current.addEventListener('mouseout', onMouseLeave);

    const current = hRef.current;
    return () => {
      current.removeEventListener('mouseover', onMouseEnter);
      current.removeEventListener('mouseout', onMouseLeave);
    }
  }, [onMouseEnter, onMouseLeave])

  return (
    <div className='App'>
      <h1 ref={hRef}>Счетчик {counter}</h1>
    </div>
  )
}

export default App
