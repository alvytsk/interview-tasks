Array.prototype.myReduce = function (cb, initialValue) {
  if(!this.length && initialValue) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  let acc = initialValue ? initialValue : this[0]

  for(let i=initialValue ? 0 : 1; i<this.length; i++) {
    acc = cb(acc, this[i], i, this)
  }

  return acc;
}

const arr = [1, 2, 3 ,4]

console.log(arr.myReduce((acc, val) => acc + val, 10))