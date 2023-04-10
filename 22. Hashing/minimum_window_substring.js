/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s.length < t.length) return "";
    let ms = {};
    let mt = {};
    // preparing freq mapping of t
    for(let i = 0; i < t.length; i++) {
        if(!mt[t[i]]) {
            mt[t[i]] = 1;
        } else {
            mt[t[i]]++; 
        }
    }
    let len = 0;
    let ans = Infinity;
    let ans_idx = -1;
    let st = 0, e = 0;
    while(e < s.length) {
        // expansion
        if(!ms[s[e]]) {
            ms[s[e]] = 1;
        } else {
            ms[s[e]]++;
        }
        if(ms[s[e]] <= mt[s[e]]) {
            len++;
        }
        //console.log(ms, len);
        if(len == t.length) {
            // try to shrink
            while(!mt[s[st]] || ms[s[st]] > mt[s[st]]) {
                ms[s[st]]--;
                st++;
            }
            if(e - st + 1 < ans) {
                ans = e - st + 1;
                ans_idx = st;
            }
        }
        e++;
    }
    //console.log(ans);
    if(ans_idx == -1) return ""; 
    let res = "";
    for(let i = 0; i < ans; i++) {
        res += s[ans_idx+i];
    }
    return res;
    
};