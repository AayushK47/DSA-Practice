function printSubsequence(arr, i, sub=[]) {
  if(i >= arr.length) {
    console.log(sub);
    return;
  }

  sub.push(arr[i]);
  printSubsequence(arr, i + 1, sub);
  sub.splice(sub.length-1, 1);
  printSubsequence(arr, i + 1, sub);
}

printSubsequence([3, 1, 2], 0);