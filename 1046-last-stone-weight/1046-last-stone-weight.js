/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  

  
  stones = stones.sort((a, b ) => {
    return a - b; 
  })
  
  while (stones.length) {
    if (stones.length === 1) {
      return stones[0];
    }
    let stone1 = stones.pop();
    let stone2 = stones.pop();
    
    if (stone1 !== stone2) {
      let newStone = Math.abs(stone1 - stone2);
      stones.push(newStone);
      stones.sort((a, b) => {
        return a - b; 
      })
    }

  }
  return 0;
};