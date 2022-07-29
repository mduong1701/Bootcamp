function squareValues(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr
}
console.log(squareValues([-5,-4,-3,-2,-1,0,1,2,3,4,5]));
// -----------------------------------------------------------
function zeroNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr
}
console.log(zeroNegatives([-5,-4,-3,-2,-1,0,1,2,3,4,5]));