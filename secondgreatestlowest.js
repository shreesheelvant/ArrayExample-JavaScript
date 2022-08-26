var a = [2 ,5, 6, 8, 9, 3], b= [];
b= a.filter(function (item, pos) {
    return a.indexOf(item) == pos;
});
console.log(b[1]);
console.log(b[b.length-2]);