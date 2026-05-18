class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if(k === 1) return nums;

        let res = [];
        let l=0;
        for(let r=k-1 ; r<nums.length; r++){
            let maxInWin = Math.max(...nums.slice(l, r+1));
            res.push(maxInWin);
            l++;
        }

        return res;
    }
}
