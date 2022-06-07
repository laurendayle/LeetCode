/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
// increment a counter(i) for each new URL encountered
// save the URL along with its encoded count(i) in the hash map

let urls = {};
let i = 0;
var encode = function(longUrl) {
  urls[i] = longUrl;
  return 'http://tinyurl.com/' + i++;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return urls[Number(shortUrl.replace('http://tinyurl.com/', ''))];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */