/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let count = 0;
    let n = gas.length;
    let tank_cap = 0;
    let flag = false;
    let start_of_tour = -1;
    let i = 0;
    while(count < 2*n) {
        if(i == start_of_tour) return i;
        tank_cap += gas[i];
        if(tank_cap >= cost[i]) {
            flag = true;
            if(start_of_tour == -1) {
                start_of_tour = i;
            }
            tank_cap -= cost[i];
            i = (i+1)%n;
            count++;
            
        } else {
            flag = false;
            tank_cap = 0;
            i = (i+1)%n;
            start_of_tour = -1
            count++;
        }
    }
    return -1;
};