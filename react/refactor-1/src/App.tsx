import './App.css'
import { FormEvent, useState, useMemo } from 'react'
import orderBy from 'lodash/orderBy'

const ascIcon = '>'
const descIcon = '<'

/*
* Компонент отрисовывающий элементы списка и их квадратичное значение,
* Кнопка add должна побавлать значение в массив
* Кнопка delete должне удалать значение из массива

* Задание: починить функционап.
*
* Доп. задание: Подумать над семантикой html
* Доп. задание: Подумать над оптимизацией.
*/

/// SOURCE

// function App() {
//   let array = [1, 2, 3, 4, 5, 6];

//   const [sortDirection, setSortDirection] = useState<any>("asc");
//   const [inputValue, setInputValue] = useState("");
//   let sum = 0;

//   array.map((i) => (sum += 1));

//   const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
//     setInputValue(e.currentTarget.value);
//   };
  
//   const handleAddItem = () => {
//     array.push(Number(inputValue));
//   };

//   const handleRemoveItem = (id: number) => {
//     array = array.filter((i) => i !== id);
//   };

//   const handleChangeSort = () => {
//     setSortDirection(sortDirection === "asc" ? "desc" : "ask");
//   };

//   return (
//     <div className="App">
//       <button onClick={handleChangeSort}>Sort {sortDirection === "asc" ? ascIcon : descIcon}</button>
//       <input
//         value={inputValue}
//         onChange={handleChangeInput}
//         type="text"
//         placeholder="Enter number"
//       />
//       <button onClick={handleAddItem}>Add</button>

//       <ul>
//         {orderBy(array, undefined, sortDirection).map((i: any) => (
//           <li>
//             {i} {i*i} {" "} <button onClick={() => handleRemoveItem(i)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//     </div>
//   )
// }


/// REFACTOR-1

const initialState = [1, 2, 3, 4, 5, 6]

function App() {
  const [numbers, setNumbers] = useState(initialState);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>("asc");
  const [inputValue, setInputValue] = useState("");

  const sum: number = useMemo(() => numbers.reduce((acc, i) => (acc += i)), [numbers]);

  const handleChangeInput = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if(isNaN(Number(value)) || value === ' ') return;
    setInputValue(value);
  };
  
  const handleAddItem = () => {
    setNumbers(prev => [...prev, Number(inputValue)]);
  };

  const handleRemoveItem = (id: number) => {
    setNumbers(prevState => [...prevState.filter((i) => i !== id)]);
  };

  const handleChangeSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="App">
      <button onClick={handleChangeSort}>Sort {sortDirection === "asc" ? ascIcon : descIcon}</button>
      <input
        value={inputValue}
        onChange={handleChangeInput}
        type="text"
        placeholder="Enter number"
      />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {orderBy(numbers, undefined, sortDirection).map((i: number) => (
          <li key={i}>
            {i} {i*i} {" "} <button onClick={() => handleRemoveItem(i)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Sum: {sum}</p>
    </div>
  )
}

export default App
