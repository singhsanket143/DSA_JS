/**
 * @param {number[][]} matches
 * @return {number[][]}
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses/
 */
var findWinners = function(matches) {
    let players = Array(100001).fill(-1);
    for(let i = 0; i < matches.length; i++) {
        let winner = matches[i][0];
        let looser = matches[i][1];
        if(players[winner] == -1 || players[winner] == 0) {
            players[winner] = 0;
        }
        if(players[looser] == -1) {
            players[looser] = 1;
        } else if(players[looser] >= 0) {
            players[looser]++;
        }
    }
    let ans = [[], []];
    for(let i = 0; i < players.length; i++) {
        if(players[i] == 0) {
            ans[0].push(i);
        } else if(players[i] == 1) {
            ans[1].push(i);
        }
    }
    return ans;
};