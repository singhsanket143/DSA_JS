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

let arr = [6001785, 27009269, 24010710 ,24012686 ,3027393 ,18011903, 3015990, 3030094, 18020109, 6023670 ];
console.log(nge(arr));