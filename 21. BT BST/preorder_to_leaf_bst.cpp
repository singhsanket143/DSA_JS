#include <bits/stdc++.h> 
/***************************************
	Below is the structure of the tree:

	template <typename T>
	class BinaryTreeNode {
	public:
		T data;
		BinaryTreeNode<T>* left;
		BinaryTreeNode<T>* right;

		BinaryTreeNode(T data) {
			this->data = data;
			left = NULL;
			right = NULL;
		}
	};
***************************************/

// leaf = []
int i;
vector<int> leaf; 
vector<int> pre;
void helper(BinaryTreeNode<int>* root, vector<int> &res) {
	if(root == NULL) return;
	res.push_back(root->data); //
	helper(root->left, res);
	helper(root->right, res);
}

void f(int curr, int l, int r) {
	if(i >= pre.size()) return;
	i++;
	if(i >= pre.size()) {
		leaf.push_back(curr);
		return;
	}
	if(pre[i] > l and pre[i] < r) {
		if(pre[i] > l and pre[i] < curr) {
			f(pre[i], l, curr);
		} else {
			f(pre[i], curr, r);
		}
	} else {
		leaf.push_back(curr);
	}
	if (pre[i] > l and pre[i] < curr) {
		f(pre[i], l, curr);
	}
	if(pre[i] > curr and pre[i] < r) {
		f(pre[i], curr, r);
	}
}


vector<int> leafNodesInBst(BinaryTreeNode<int>* root)
{
	// we have pre order in this array
	leaf.clear();
	pre.clear();
	i = 0;
	helper(root, pre);
	f(pre[0], INT_MIN, INT_MAX);
	return leaf;
}
