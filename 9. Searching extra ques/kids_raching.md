A new racing track for kids is being built in New York with ‘n’ starting spots. The spots are located along a straight line at positions x1,  x2... xn(xi <=10^9).  For each ‘i’, xi+1 > xi.
At a time only ‘m’ children are allowed to enter the race. Since the race track is for kids, they may run into each other while running. To prevent this, we want to choose the starting spots  such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?

-----------------------------------------------------------------------------------
The first line of input will contain the value of n, the number of starting spots.
The second line of input will contain the n numbers denoting the location of each spot.
The third line will contain the value of m, number of children.
Input
5  
1 2 4 8 9 
3
Output
3
Explanation
We can place the children at locations 1, 4 and 9.
Input
5  
1 2 4 8 9 
2
Output
8
Explanation
We can place the children at locations 1 and 9.

