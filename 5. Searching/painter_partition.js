//https://www.interviewbit.com/problems/painters-partition-problem/
function canPaintBoard(A, C, N, mid, B) {
    let painters = 1;
    let unitsPainted = 0;
    let i = 0;
    while(i < N) {
        if(unitsPainted + C[i]*B > mid) {
            painters++;
            if(painters > A) return false;
            unitsPainted = 0;
            continue;
        } else {
            unitsPainted += C[i]*B;
            i++;
        }
    }
    return painters <= A;
}
module.exports = { 
 //param A : integer
 //param B : integer
 //param C : array of integers
 //return an integer
	paint : function(A, B, C){
        let N = C.length;
        let summation = 0;
        let maxEl = -1;
        for(let i = 0; i < C.length; i++) {
            summation += C[i];
            maxEl = Math.max(maxEl, C[i]);
        }
        let lo = maxEl*B;
        let hi = summation*B;
        let ans = -1;
        while(lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if(canPaintBoard(A, C, N, mid, B)) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } 
        return ans % 10000003;
	}
};
