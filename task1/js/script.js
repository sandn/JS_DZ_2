var base = Math.round(parseInt(prompt('Введите число', '')));
var exp = Math.round(parseInt(prompt('Введите степень', '')));
var result = base;

console.log('Base = ' + base);
console.log('Exp = '+ exp);
if (!exp) {
  result = 1;
} else {
    for (exp -= 1; exp > 0; exp--) {
        // console.log(exp);
        result *= base;
        // console.log(result);

    }
    ;
};
console.log('final='+result);
