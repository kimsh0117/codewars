function persistence(num) {
  let count = 0;
  function number(n) {
    n = n.toString().split('');
    if(n.length === 1) return;
    count += 1;
    n = n.reduce((a,b)=>{
      return Number(a) * Number(b)
    });
    number(n);
  }
  number(num)
  return count;
}
console.log(persistence(39))