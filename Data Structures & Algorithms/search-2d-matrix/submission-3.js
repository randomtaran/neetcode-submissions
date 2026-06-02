class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowSize = matrix.length;
        const columnSize = matrix[0].length;
        let i = 0;
        let j = rowSize - 1;
        // let m = 0;
        // let n = 0;
        let row = false;
        while(j>=i) {
            row = Math.trunc((i+j)/2);
            if(matrix[row][0] > target) j = row-1;
            else if(matrix[row][columnSize-1] < target) i = row+1;
            else break;
        }
        // if(!(i<=j)) return false;

        let m =0;
        let n= columnSize-1;
        while(n>=m){
            let col = Math.trunc((m+n)/2);
            if(matrix[row][col] === target) return true;
            else if(matrix[row][col] < target) m = col+1;
            else n = col-1;
        }
        return false;
    }
}
