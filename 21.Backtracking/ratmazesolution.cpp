#include <iostream>
#include <vector>
int ans = 0;

void f(int i, int j, int n, std::vector<std::vector<int> > &grid) {
    if(i == n-1 and j == n-1 ) {
        if(grid[i][j] != 1) {
            ans++;
        }
        return;
    }
    if(i >= n or j >= n or i < 0 or j < 0 or grid[i][j] == 1 or grid[i][j] == -1) {
        return;
    }
    
    grid[i][j] = -1;
    f(i+1, j, n, grid); // down
    f(i, j+1, n, grid); // right
    f(i-1, j, n, grid); // up 
    f(i, j-1, n, grid); // left 
    grid[i][j] = 0;
}

int main() {
	// your code goes here
	// taking input
	ans = 0; // everytime init with 0
	int n;
	std::cin>>n;
	std::vector<std::vector<int> > grid (n, std::vector<int> (n, 0));
	for(int i = 0; i < n; i++) {
	    for(int j = 0; j < n; j++) {
	        std::cin>>grid[i][j];
	    }
	}
	f(0, 0, n, grid); // make the call to function
	std::cout<<ans<<"\n"; // print ans
	return 0;
}

