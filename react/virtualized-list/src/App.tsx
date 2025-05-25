import { useCallback, useRef, useEffect, useState } from 'react';
import './App.css';

function VirtualizedList({ items, itemsHeight, height, renderItem }) {
  const [scrollTop, setScrollTop] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = items.length;

  // Высота всего списка
  const totalHeight = totalItems * itemsHeight;

  // Индекс первого видимого элемента
  const startIndex = Math.max(0, Math.floor(scrollTop / itemsHeight));
  const endIndex = Math.min(totalItems - 1, Math.floor((scrollTop + height) / itemsHeight));

  // Смещение для первых отрендеренных элементов
  const offsetY = startIndex * itemsHeight;

  const visibleItems = items.slice(startIndex, endIndex + 1);

  const onScroll = useCallback(() => {
    if (containerRef?.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    if (!containerRef?.current) return;

    const current = containerRef.current;
    current.addEventListener('scroll', onScroll);

    return () => {
      current.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: `${height}px`, overflowY: 'auto' }}>
      <div style={{ height: `${totalHeight}px`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: `${offsetY}px` }}>
          {visibleItems.map((item, index) => (
            <div key={index} style={{ height: `${itemsHeight}px`, lineHeight: `${itemsHeight}px` }}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  // Генерируем большой список элементов
  const items = Array.from({ length: 10000 }, (_, index) => `Элемент ${index + 1}`);

  console.log(items);

  // Функция для рендеринга каждого элемента
  const renderItem = (item, index) => <div>{item}</div>;

  return (
    <div>
      <VirtualizedList items={items} itemsHeight={30} height={500} renderItem={renderItem} />
    </div>
  );
}

export default App;
