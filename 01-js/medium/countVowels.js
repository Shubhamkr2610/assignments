/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("AEIOUaeiou"));

module.exports = countVowels;
