/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-parentheses/submissions/
 */
var isValid = function(s) {
    let st = []; // stack
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            // if you've an opening bracket just add it
            st.push(s[i]);
        } else {
            let currClosing = s[i];
            if(st.length == 0) {
                return false;
            }
            if(currClosing == ')' && st[st.length - 1] != '(') {
                return false;
            }
            if(currClosing == '}' && st[st.length - 1] != '{') {
                return false;
            }
            if(currClosing == ']' && st[st.length - 1] != '[') {
                return false;
            }
            st.pop();
        }
    }
    return st.length == 0;  
};