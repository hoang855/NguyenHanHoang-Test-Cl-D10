function adjacentElementsProduct(inputArray) {

  var a = b;
  var max = a[0] * a[1];
  var num1 = a[0];
  var num2 = a[1];
  for (var i = 0; i < a.length; i++) {
    if (a[i] * a[i + 1] > max) {
      max = a[i] * a[i + 1];
      num1 = a[i];
      num2 = a[i + 1];
    }
  }
  console.log(max);

}
var inputArray = [2, 3, -5, -2, 4];
console.log(adjacentElementsProduct(inputArray));



// A.2
function alternatingSums(b) {
  let a = b;
  let arr1 = 0;
  let arr2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      arr1 = arr1 + a[i];
    } else {
      arr2 = arr2 + a[i];
    }
  }
  console.log(arr1, arr2);
}

console.log(alternatingSums([60, 40, 55, 75, 64]));
