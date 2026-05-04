class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hmap = {};
        for(let i=0 ; i<nums.length ; i++) {
            const diff = target - nums[i];
            if(hmap[diff] != undefined) return [hmap[diff], i];
            hmap[nums[i]] = i;
        }
    }
}
