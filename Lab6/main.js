const arr1 = [17, 21, 23];
arr2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  const size = arr.length;
  let str = "...";
  for (let i = 0; i < size; i++) {
    str += `${arr[i]}ºC in ${i + 1} day...`;
  }
  console.log(str);
}

printForecast(arr1);
printForecast(arr2);
