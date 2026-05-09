class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // let hmap = new Map();

        // for (let i = 0; i < nums.length; i++) {
        //     if (hmap.has(nums[i] - 1)) {
        //         hmap.set(nums[i], hmap.get(nums[i] - 1));
        //     } else {
        //         hmap.set(nums[i], i);
        //     }
        // }

        // for(let i=0 ;i<nums.length ; i++) {
        //     if(!hmap.has(nums[i] - 1)) {

        //     }
        // }

        // return max;
        let s = new Set(nums);
        let longest = 0;
        for(let i=0;i<nums.length ; i++) {
            if(!s.has(nums[i]-1)) {
                let length = 0; 
                while(s.has(nums[i]+length)) {
                    length+=1;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
