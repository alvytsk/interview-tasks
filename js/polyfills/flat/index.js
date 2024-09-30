Array.prototype.myFlat = function (level = 1) {
    if(!this.length) {
      return []
    }
  
    const result = [];
  
    for(let i = 0; i < this.length; i++) {
      if(Array.isArray(this[i])) {
        if(level > 0) {
          result.push(...this[i].myFlat(level - 1))
        } else {
          result.push(this[i])
        }
      } else {
        result.push(this[i])
      }
    }
  
    return result
  }
  
  const arr = [1, 2, 3 ,4, [1, 2, 5, 6, [10, 20, 30]]]
  
  console.log(arr.myFlat())