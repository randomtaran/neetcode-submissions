class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let arr = [];
        let s = new Set();
        nums.sort((a, b) => a-b);
        for(let i = 0 ;i < nums.length ; i++ ) {
            let j = i+1;
            let k = nums.length - 1;
            while(j<nums.length && k >i) {
                if((nums[i] + nums[j] + nums[k] === 0)
                    && (i!==j)
                    && (k!==j)
                    && (i!==k)) {
                    
                    const key = [nums[i], nums[j], nums[k]].sort().join(',');
                    if(!s.has(key)) {
                        s.add(key);
                        arr.push([nums[i], nums[j], nums[k]].sort());
                    }
                    j++;
                    k--;
                }
                else if(nums[i] + nums[j] + nums[k] > 0)
                    k--;
                else 
                    j++;
            }
        }
        return arr;
    }
}
