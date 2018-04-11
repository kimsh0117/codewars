// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

// function nextBigger(n) {
//   const arr = toStr(n);
//   const permutation = perm(arr).map(x => Number(x.join(''))).sort((a,b) => a - b).filter(x => x > n)
//   return arr.length === 1 || !permutation.length ? -1 : permutation[0]
// }
// function toStr(n) {
//   return n.toString(10).split('').map(x => parseInt(x))
// }
// function perm(xs) {
//   let ret = [];
//   for (let i = 0; i < xs.length; i = i + 1) { 
//     let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1))); 
//     if (!rest.length) {
//       ret.push([xs[i]])
//     } else { 
//       for (let j = 0; j < rest.length; j = j + 1) {
//         ret.push([xs[i]].concat(rest[j])) 
//       } 
//     } 
//   } 
//   return ret
// };
// function nextBigger(n) {
//   const leng = splitNumber(n).length;
//   const sw = swap(n);
//   return leng === 1 || sw === n ? -1 : sw;
// }
// function splitNumber(n) {
//   return n.toString(10).split('').map(x => parseInt(x))
// }
// function swap(n) {
//   let toArr = splitNumber(n);
//   let len = toArr.length-2;
//   return Number(toArr.slice(0,len).concat(toArr[toArr.length-1], toArr[toArr.length-2]).join(''));
// }

// 진식스 버전
const nextBigger = function(number) {
  const numJoin = array => {
    return parseInt(array.join(""));
  };
  const numSplit = num => {
    return num.toString().split("");
  };

  const num = numSplit(number);
  let result = -1;
  let a, b, len = num.length;

  if (len < 2) return result;
  else len = len - 1;

  while (len) {
    a = num[len - 1];
    b = num[len];
    if (a < b) {
      [a, b] = [b, a];
      num[len - 1] = a;
      num[len] = b;
      result = numJoin(num);
      if (number < result) return result;
    }
    len--;
  }

  return result;
};
console.log(swap(414))

