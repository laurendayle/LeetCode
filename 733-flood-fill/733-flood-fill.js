/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const color = image[sr][sc];
  
  const fill = (x, y) => {
    if (image[y] === undefined || image[y][x] === undefined) {
      return;
    }
    if (image[y][x] !== color || image[y][x] === newColor) {
      return;
    }
    image[y][x] = newColor;
    
    fill(x + 1, y);
    fill(x - 1, y);
    fill(x, y + 1);
    fill(x, y - 1);
  }
  fill(sc, sr);
  return image;
};