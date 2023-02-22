arr = [1,2,3];
n = arr.length;
p = (1 << n) - 1;
for(num = 0; num <= p; num++) {
    temp = num;
    res = [];
    j = arr.length - 1;
    while(j >= 0 && temp > 0) {
        isEven = temp % 2 == 0;
        if(!isEven) {
            res.push(arr[j]);
        }
        j--;
        temp = temp >> 1;
    }
    console.log(res.reverse());
}
