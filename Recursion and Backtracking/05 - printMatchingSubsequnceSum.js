function printMatchingSubsequenceSum(arr, i, num, sub=[], sum=0) {
  if(i>=arr.length) {
    if(sum === num) {
      console.log(sub);
      return;
    }
    return;
  }
  sum += arr[i];
  sub.push(arr[i]);
  printMatchingSubsequenceSum(arr, i+1, num, sub, sum);
  sum -= arr[i];
  sub.splice(sub.length-1, 1);
  printMatchingSubsequenceSum(arr, i+1, num, sub, sum);
}

printMatchingSubsequenceSum([1, 2, 1], 0, 2);