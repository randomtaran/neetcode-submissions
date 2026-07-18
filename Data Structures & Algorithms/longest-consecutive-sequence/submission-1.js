class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const s = new Set(nums);
        let ans = 0;
        for(let i=0 ; i<nums.length ; i++){
            let longest = 1;
            let j=1;
            while(s.has(nums[i]+j)){
                longest++;
                j++;
            }
            ans = Math.max(ans, longest);
        }
        return ans;
    }
}
