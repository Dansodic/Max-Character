//Daniel Kenny 19/08/19
// Example of how to check what character occurs the most

function maxChar(str){
  const charMap = {}; //object that will hold our character map
  let maxNum = 0;
  let maxChar = '';
  str.split('').forEach(function(char){
    if(charMap[char]){
      charMap[char]++; //increments character by 1 if it's found
    }else{
      charMap[char] = 1; //if this is the first time we find a char we set it to 1
    }
  });

  for(let char in charMap){
    if(charMap[char] > maxNum){
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

let myString1 ="kilkenny";;
console.log(maxChar(myString1));