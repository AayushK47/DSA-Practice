function isPalindrome(str, i, j) {
  if(i>=j) {
    return true;
  }

  return str[i] === str[j] ? isPalindrome(str, i+1, j-1) : false;
  
}

let x = "taxoonomy"
console.log(isPalindrome(x, 0, x.length-1));