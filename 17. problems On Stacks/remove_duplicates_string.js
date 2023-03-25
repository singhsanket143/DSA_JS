/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let st = [];
    st.push(s[0]);
    for(let i = 1; i < s.length; i++) {
        if(st.length > 0 && s[i] == st[st.length - 1]) {
            st.pop();
            continue;
        } else {
            st.push(s[i]);
        }
    }
    let ans = "";
    for(let i = 0; i < st.length; i++) {
        ans += st[i];
    }
    return ans;
};