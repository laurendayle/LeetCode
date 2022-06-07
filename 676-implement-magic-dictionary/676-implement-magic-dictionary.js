
var MagicDictionary = function() {
  this.book = new Map();
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
  for (let word of dictionary) {
    if (this.book.get(word.length)) {
      this.book.get(word.length).push(word);
    } else {
      this.book.set(word.length, [word]);
    }
  }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
  if (!this.book.get(searchWord.length)) {
    return false;
  }
  let set = [...this.book.get(searchWord.length)];
  let w = 0; 
  while (w < searchWord.length) {
    for (let i = 0; i < set.length; i++) {
      if (searchWord[w] !== set[i][w]) {
        if (searchWord.slice(w + 1) === set[i].slice(w + 1)) {
          return true; 
        }
        set.splice(i, 1);
        i--;
      }
    }
    w++;
  }
  return false;
}
    

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */