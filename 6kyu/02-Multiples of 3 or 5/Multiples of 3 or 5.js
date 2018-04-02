//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//Note: If the number is a multiple of both 3 and 5, only count it once.

//배수판정법 공부

function solution(number){
  let arr = [];
  for(let i = 1; i < number; i+=1) {
    arr.push(i);
  }
  return arr.filter((number)=>divisibilityThree(number) || divisibilityFive(number)).length > 0 ? arr.filter((number)=>divisibilityThree(number) || divisibilityFive(number)).reduce((a,b)=> a + b) : 0;
}

function divisibilityThree(number) {
  return number.toString().split('').reduce((a,b)=> Number(a) + Number(b)) % 3 ? false : true;
}

function divisibilityFive(number) {
  let temp = number.toString().split('');
  if(temp[temp.length-1] == 5 || temp[temp.length-1] == 0) return true;
  else return false;
}
