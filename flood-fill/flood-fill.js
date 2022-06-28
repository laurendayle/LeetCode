/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = (image, sr, sc, color) => {
  if (image[sr][sc] === color) return image;
  let val = image[sr][sc];

  const fill = (image, i, j, color, val) => {
    if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== val) {
      return;
    }

    image[i][j] = color;
    fill(image, i + 1, j, color, val);
    fill(image, i - 1, j, color, val);
    fill(image, i, j + 1, color, val);
    fill(image, i, j -1, color, val);
  }
  fill(image, sr, sc, color, val);
  return image;
}