for (var i = 0; i <= 255; i++){
    console.log(i);
}
// -------------------------------------
function max(arr){
    var maxNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (maxNum < arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
};
console.log(max([5,4,3,6,8,3,9,1,0]));
// --------------------------------------------
function avg(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avgNum = sum / arr.length;
    return avgNum;
}
console.log(avg([1,2,3,4,5]));