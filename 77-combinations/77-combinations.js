/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const result = []; 
  
  const backtrack = (index, slate) => {
    if (slate.length === k) {
      result.push([...slate]);
      return;
    }
    
    for (let i = index; i <= n; i++) {
      slate.push(i);
      backtrack(i + 1, slate);
      slate.pop();
    }
  }
  
  backtrack(1, []);
  return result; 
}