function countMatchingSubsequenceSum(arr, num, i, count=0, sum=0, sub=[]) {
  if(i >= arr.length) {
    if (num === sum) {
      count ++;
      return count;
    }
    return count;
  }

  sum += arr[i];
  sub.push(arr[i]);
  count = countMatchingSubsequenceSum(arr, num, i + 1, count, sum, sub);
  sum -= arr[i];
  sub.splice(sub.length-1, 1);
  count = countMatchingSubsequenceSum(arr, num, i + 1, count, sum, sub);

  return count;
}

console.log(countMatchingSubsequenceSum([2, 1, 2], 2, 0));