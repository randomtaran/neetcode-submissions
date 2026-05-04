class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums.sort();
        // let j = nums.length - 1;
        // let i = 0;
        // while(i < nums.length && j >= 0) {
        //     if(nums[i] + nums[j] == target) {
        //         return [i, j];
        //     } else if(nums[i] + nums[j] < target) {
        //         i++;
        //     } else {
        //         j--;
        //     }
        // }
        for(let i = 0 ; i < nums.length ; i++) {
            for (let j=i+1 ; j<nums.length ; j++) {
                if(nums[i]+nums[j] === target) {
                    return [i,j];
                }
            }
        }
        return;
    }
}
