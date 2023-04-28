/**
 * @param {number} n
 * @return {string[][]}
 */
function isSafe(r, c, n, grid) {
    for(let row = r-1; row >= 0; row--) {
        if(grid[row][c] == 'Q') return false;
    }
    for(let row = r-1, col = c+1; row >= 0 && col < n; row--, col++) {
        if(grid[row][col] == 'Q') return false;
    }
    for(let row = r-1, col = c-1; row >= 0 && col >=0 ; row--, col--) {
        if(grid[row][col] == 'Q') return false;
    }
    return true;
}
let result;
function f(r, n, grid) {
    if(r == n) {
        let temp = [];
        for(let i = 0; i < n; i++) {
            temp.push(grid[i].join(''));
        }
        result.push(temp);
        return;
    }
    for(let c = 0; c < n; c++) {
        if(isSafe(r, c, n, grid)) {
            grid[r][c] = 'Q';
            f(r+1, n, grid);
            grid[r][c] = '.';
        }
    }
}

var solveNQueens = function(n) {
    let grid = [];
    result = [];
    for(let i = 0; i < n; i++) {
        grid[i] = Array(n).fill('.');
    }
    f(0, n, grid);
    return result;
};
