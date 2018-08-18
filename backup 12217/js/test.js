var arr = [1, 2, 3, 4, 5]
var arr2 = [1]
console.log(arr2.length);
console.log(arr.length);

var check = function(){
if (arr2[arr2.length - 1] == arr[arr2.length -1]){
    console.log("true");
    return true;
} else {
    console.log("false");
    return false;
}
}

console.log(check());


arr2.push(2);
console.log(check());
arr2.push(3);
console.log(check());