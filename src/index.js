module.exports = function solveEquation(equation) {
    let array = equation.split(' ');
    let a = +array[0];
    let b = +array[4];
    if (array[3] === '-') b = - b;
    let c = +array[8];
    if (array[7] === '-') c = - c;
    let d = b * b - 4 * a * c;
    let x1 = Math.round((- b + Math.sqrt(d))/(2 * a));
    let x2 = Math.round((- b - Math.sqrt(d))/(2 * a));
    let arr = [];
    arr.push(x1,x2);
    return arr.sort((a,b) => a - b);
}

