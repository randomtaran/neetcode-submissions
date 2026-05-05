class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hmap = {};
        for(let i=0 ; i<nums.length ; i++) {
            if(hmap[nums[i]] != undefined) hmap[nums[i]] = hmap[nums[i]]+1;
            else hmap[nums[i]] = 1;
        }
        const descSortArr = Object.entries(hmap).sort(([, a], [,b]) => b-a);
        console.log('descSortArr: ', descSortArr);
        let res = [];
        for(let i=0 ; i<k ; i++) {
            res = [...res, descSortArr[i][0]]
        }
        return res;
    }
}
