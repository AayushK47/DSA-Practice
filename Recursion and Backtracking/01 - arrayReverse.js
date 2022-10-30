function arrayReverse(arr, i, j) {
  if(i>=j) {
    return arr;
  }

  let temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;

  return arrayReverse(arr, i+1, j-1);  
}

let x = [2,5,3,2,9, 7]
console.log(arrayReverse(x, 0, x.length-1));
