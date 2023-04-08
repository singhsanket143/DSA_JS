let res = {};
let min = 0;
let max = 0;
 
function f(root, col){
 if(root == null) return;
 
   
    if(!res[col]){
        res[col] = [root.data]
    }else{
        res[col].push(root.data);
    }
 
    min = Math.min(min, col);
    max = Math.max(max, col);
 
    f(root.left, col-1);
    f(root.right, col+1);
}
 
var verticalTraversal = function(root) {
    res = [];
    f(root, 0);
    const ans = [];
    for(min; min <= max; min++){
        ans.push(res[min]);
    }
    return ans;
};
 
let root = {
    data:1,
    left:{
        data:2,
        left:{
            data:4,
            left:null,
            right:null
        },
        right:{
            data:5,
            left:null,
            right:null
        }
    },
    right:{
        data:3,
        left:{
            data:6,
            left:null,
            right:null
        },
        right:{
            data:7,
            left:null,
            right:null
        }
    }
}
 
 
console.log(verticalTraversal(root));
