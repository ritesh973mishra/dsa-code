// string anagram
// 'hello' ==> '0lleh'
// 'aash' =>>  'saah'

// condition

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let count = {};
  for (letter of string1) {
    count[letter] = (count[letter] || 0) + 1;
  }

  for (item of string2) {
    if (!count[item]) {
      return false;
    }
    count[item] = count[item] - 1;

  }
  return true;
}
const result = isAnagram("hellol", "ehlloe");
// console.log(result);
