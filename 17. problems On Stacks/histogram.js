/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let st = [];
    let n = heights.length;
    st.push(0);
    let ans = -1;
    for(let i = 1; i < n; i++) {
        while(st.length > 0 && heights[i] < heights[st[st.length - 1]]) {
            let x = st[st.length - 1];
            st.pop();
            ans = Math.max(ans, heights[x] * (i - ((st.length > 0) ? st[st.length - 1] : -1) - 1));
        }
        st.push(i);
    }
    
    while(!(st.length == 0)) {
        let x = st[st.length - 1];
        st.pop();
        ans = Math.max(ans, heights[x] * (n - ((st.length > 0) ? st[st.length - 1] : -1) - 1));
    }
    
    return ans;
};