function printFirstMatchingSubsequenceSum(arr, num, i, sum=0, sub=[]) {
  if(i >= arr.length) {
    if(num == sum) {
      console.log(sub);
      return true;
    }
    return false;
  }

  sum += arr[i];
  sub.push(arr[i]);
  if(!printFirstMatchingSubsequenceSum(arr, num, i+1, sum, sub)) {
    sum -= arr[i];
    sub.splice(sub.length -1, 1);
    if(!printFirstMatchingSubsequenceSum(arr, num, i+1, sum, sub)) {
      return false;
    }
  }
  return true;
  
}

printFirstMatchingSubsequenceSum([1, 2, 1], 2, 0);