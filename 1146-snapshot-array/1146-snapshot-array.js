/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.current = [];
  this.archive = [];
  this.id = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.current[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.archive.push([...this.current]);
  return this.id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const val = this.archive[snap_id][index];
  return val !== undefined ? val : 0;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */