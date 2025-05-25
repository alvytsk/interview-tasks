// import React, { useState, useEffect, useRef, ReactNode } from 'react';

// interface VirtualizedListProps {
//   itemCount: number;
//   itemHeight: number;
//   height: number;
//   renderItem: (index: number) => ReactNode;
// }

// const VirtualizedList: React.FC<VirtualizedListProps> = ({
//   itemCount,
//   itemHeight,
//   height,
//   renderItem
// }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [endIndex, setEndIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const buffer = 5;

//   const updateVisibleItems = () => {
//     const container = containerRef.current;
//     if (container) {
//       const containerTop = container.scrollTop;
//       const containerHeight = container.clientHeight;
//       const start = Math.max(Math.floor(containerTop / itemHeight) - buffer, 0);
//       const end = Math.min(
//         Math.ceil((containerTop + containerHeight) / itemHeight) + buffer,
//         itemCount - 1
//       );
//       setStartIndex(start);
//       setEndIndex(end);
//     }
//   };

//   useEffect(() => {
//     updateVisibleItems(); // Изначальная установка видимых элементов
//   }, [itemCount, itemHeight]);

//   const itemList: ReactNode[] = [];
//   for (let i = startIndex; i <= endIndex; i++) {
//     itemList.push(
//       <div
//         key={i}
//         style={{
//           position: 'absolute',
//           top: i * itemHeight,
//           height: itemHeight,
//           width: '100%'
//         }}>
//         {renderItem(i)}
//       </div>
//     );
//   }

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height,
//         overflowY: 'auto',
//         position: 'relative',
//         width: '100%'
//       }}
//       onScroll={updateVisibleItems}>
//       <div
//         style={{
//           height: itemCount * itemHeight,
//           width: '100%',
//           position: 'relative'
//         }}>
//         {itemList}
//       </div>
//     </div>
//   );
// };

// export default VirtualizedList;
