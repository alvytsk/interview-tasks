import './App.css';
import VirtualizedList from './VirtualizedList';

function App() {
  const itemCount = 1000; // Количество элементов в списке
  const itemHeight = 35; // Высота одного элемента
  const height = 600; // Высота контейнера списка

  const renderItem = (index: number) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #ddd',
        background: '#f9f9f9',
        fontSize: '14px'
      }}>
      Item {index}
    </div>
  );

  return (
    <div className="App">
      <h1>Virtualized List Example</h1>
      <VirtualizedList
        itemCount={itemCount}
        itemHeight={itemHeight}
        height={height}
        renderItem={renderItem}
      />
    </div>
  );
}

export default App;
