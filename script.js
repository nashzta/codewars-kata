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

// console.log(arrayDiff([1, 2], [1]))
// console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([1, 2, 2, 2, 3], [2, 3]));

//*- BEST SOLUTION 

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
} */

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
