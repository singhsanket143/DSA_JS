
/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/




process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}

function nge(arr) {
    /**
     * Time: O(n)
     * Space: O(n)
     */
    let n = arr.length;
    let output = Array(n);
    let st = [];
    st.push(0);
    for(let i = 1; i < n; i++) {
        while(st.length > 0 && arr[i] > arr[st[st.length - 1]]) {
            output[st[st.length - 1]] = arr[i];
            st.pop();
        }
        st.push(i);

    }
    while(st.length > 0) {
        let topOfStack = st[st.length - 1];
        output[topOfStack] = -1;
        st.pop();
    }
    return output;
}


function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */

    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */

   /*
   Log your output here 
   eg: console.log(x);
   */
    const n = Number(readLine());
    let arr = readLine().trim().split(" ").map(el => Number(el));
    //console.log(arr);
    const res = nge(arr);
    //console.log(res);
    let str = "";
    for (let i = 0; i < res.length; i++) {
        str += res[i] + " ";
    }
    console.log(str);

}