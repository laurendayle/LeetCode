/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  
  let map = new Map();
  
  for (var i = 0; i < matches.length; i++) {
    let winner = matches[i][0];
    let loser = matches[i][1];
    
    if (!map.has(winner)) {
      map.set(winner, [1, 0]);
    } else {
      let currentScore = map.get(winner);
      currentScore[0]++; 
      map.set(winner, currentScore); 
    }
    if (!map.has(loser)) {
      map.set(loser, [0, 1]); 
    } else {
      let currentScore = map.get(loser);
      currentScore[1]++;
      map.set(loser, currentScore); 
    }
  }
  let result = [[], []];
  for (var [player, score] of map) {
    if (score[1] === 0) {
      result[0].push(player);
    }
    if (score[1] === 1) {
      result[1].push(player);
    }
  }
  
  result[0].sort((a, b) => {
    return a - b; 
  });
  result[1].sort((a, b) => {
    return a - b; 
  });
  return result; 
};