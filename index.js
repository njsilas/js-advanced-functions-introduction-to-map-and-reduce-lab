// Your code here
function mapToNegativize (sourcearray) {
   let arry = sourcearray.map(obj => obj * -1)
       return arry  
} 
function mapToNoChange (sourcearray) {
    let arry = sourcearray.map(obj => obj)
    return arry
}
function mapToDouble (sourcearray) {
    let arry = sourcearray.map(obj => obj * 2)
        return arry  
 } 
 function mapToSquare (sourcearray) {
    let arry = sourcearray.map(obj => obj * obj)
        return arry  
 } 

 function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
}