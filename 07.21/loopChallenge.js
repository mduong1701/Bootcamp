var i = 1;
while (i <= 20){
    if (i % 2 != 0){
        console.log(i);
    }
    i++;
}
// --------------------------
var a = 100;
while (a >= 0){
    if (a % 3 == 0){
        console.log(a);
    }
    a--;
}
// ---------------------------
var b = [4, 2.5, 1, -0.5, -2, -3.5];
var c = 0;
while (c < b.length){
    console.log(b[c]);
    c++;
}
// --------------------------------
var sum = 0;
var d = 1;
while (d <= 100){
    sum += d;
    d++;
}
console.log(sum);
// ------------------------
var product = 1;
var e = 1;
while (e <= 12){
    product *= e;
    e++;
}
console.log(product);