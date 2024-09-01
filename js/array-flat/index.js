// Выровнять глубоко вложенный массив без Array.flat
// Максимально возможный уровень вложенности - 1000

var flat = function (arr, depth = 1) {
  if (depth <= 0) return arr;
  if (depth > 1000) depth = 1000;

  // const result = []

  // for (let i = 0; i < arr.length; i++) {
  //   if (Array.isArray(arr[i])) {
  //     result.push(...flat(arr[i], depth - 1))
  //   } else {
  //     result.push(arr[i])
  //   }
  // }
  // return result

  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val), [])
}

console.log(flat([1, 2, 3, [4, 5, [6, 7, [8, 9]]]], 3))