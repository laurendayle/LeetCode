/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map_st = {};
  let map_ts = {};
  
  for (var i = 0; i < s.length; i++) {
    let c1 = s.charAt(i);
    let c2 = t.charAt(i);
    
    if (!map_st[c1] && !map_ts[c2]) {
      map_st[c1] = c2;
      map_ts[c2] = c1;
    } else if (!(map_st[c1] === c2 && map_ts[c2] === c1)) {
      return false; 
    }
  }
  return true; 
};