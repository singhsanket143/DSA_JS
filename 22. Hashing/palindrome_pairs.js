function isPalindrome(str, i, j) {
    // returns if str[i..j] is a palindrome
    while(i <= j) {
        if(str[i] != str[j]) return false;
        i++;
        j--;
    }
    return true;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

var palindromePairs = function(words) {
    let mp = {}; // word: index
    for(let i = 0; i < words.length; i++) {
        mp[words[i]] = i; // key: word[i], value: i
    }
    let result = [];
    for(let i = 0; i < words.length; i++) {
        // every word one by one
        let pre = "";
        // prefix logic
        for(let j = 0; j < words[i].length; j++) {
            pre += words[i][j]; // added jth char to get a prefix
            let rev = reverseString(pre); // get the reverse of the prefix
            let hasSuffix = mp[rev];
            
            if(hasSuffix == undefined) continue;
            let isRemainingPalindrome = isPalindrome(words[i], j+1, words[i].length - 1);
            if(isRemainingPalindrome) {
                console.log("Found pre" , [i, mp[rev]])
                result.push([i, mp[rev]]);
            }
        }
        // suffix logic
        let suf = "";
        for(let j = words[i].length - 1; j >= 0; j--) {
            suf += words[i][j];
            let rev = reverseString(suf);
            let hasPrefix = mp[rev];
            if(hasPrefix == undefined || hasPrefix == i) continue;
            let isRemainingPalindrome = isPalindrome(words[i], 0, j-1);
            if(isRemainingPalindrome) {
                console.log("Found suff" , [mp[rev], i])
                result.push([mp[rev], i]);
            }
        }
    }
    return result;
    
    
};

console.log(palindromePairs(["sssll", "lls"]));