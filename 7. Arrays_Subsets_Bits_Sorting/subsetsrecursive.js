function f(arr, i) {
    if(i == arr.length) return [];
    let result = [];
    let temp = f(arr, i + 1);
    if(temp.length == 0) {
        result.push([arr[i]].concat(temp));
        result.push(temp);
    } else {
        for(let j = 0; j  < temp.length; j++) {
            result.push([arr[i]].concat(temp[j]));
            result.push(temp[j]);
        }
    }
    return result;
}

response = f([1,2,3,4], 0);
console.log(response);