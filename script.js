/* CODEWARS  */

//* KATA 1

/* function arrayDiff(mainList, diffList) {
  const numberDiff = diffList[0];
  mainList = mainList.filter((number) => number !== numberDiff);
  if (diffList.length > 1) {
    diffList.shift();
    mainList = arrayDiff(mainList, diffList);
  }
  return mainList;
}



//*- BEST SOLUTION 

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
} */

// console.log(arrayDiff([1, 2], [1]))
// console.log(arrayDiff([1,2,2,2,3],[2]))
// console.log(arrayDiff([1, 2, 2, 2, 3], [2, 3]));

//* KATA 2

// const uniqueInOrder = function (iterable) {
//   if (typeof iterable === "string") iterable = iterable.split("");
//   if (!iterable.length) return [];

//   const resultArr = [iterable[0]];
//   let indexResultArr = 0;

//   for (let i = 0; i < iterable.length - 1; i++) {
//     if (resultArr[indexResultArr] !== iterable[i + 1]) {
//       resultArr.push(iterable[i + 1]);
//       indexResultArr++;
//     }
//   }

//   return resultArr;
// };

//*- Best solution
// var uniqueInOrder = function (iterable) {
//   return [...iterable].filter((a, i) => a !== iterable[i - 1]);
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

//* KATA 3

// function order(words) {
//   if (!words.length) return "";

//   const splitWords = words.split(" ");

//   const wordsInOrder = [];

//   for (let x = 0; x <= splitWords.length; x++) {
//     for (let i = 0; i < splitWords.length; i++) {
//       if (splitWords[i].includes(`${x}`)) {
//         wordsInOrder.push(splitWords[i]);
//       }
//     }
//   }

//   return wordsInOrder.join(" ");
// }

//*- Best Solution

// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }

// order("is2 Thi1s T4est 3a");
// order("4of Fo1r pe6ople g3ood th5e the2");
// order("");
