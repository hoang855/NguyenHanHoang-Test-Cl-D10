// function adjacentElementsProduct(inputArray) {

//     let

// }

function FindMax(b) {
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
var a = [2, 3, -5, -2, 4];

// console.log(FindMax(a));

// function maxProduct(arr, n)
// {
//     if (n < 2)
//     {
//         document.write("No pairs exists" + "<br>");
//         return;
//     }

//     // Initialize max product pair
//     let a = arr[0], b = arr[1];

//     // Traverse through every possible pair
//     // and keep track of max product
//     for (let i=0; i<n; i++)
//     for (let j=i+1; j<n; j++)
//         if (arr[i]*arr[j] > a*b)
//             a = arr[i], b = arr[j];

//     document.write("Max product pair is {" + a + ", "
//         + b + "}");
// }

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
