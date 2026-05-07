class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preProd = [1];
        for(let i=1 ; i<nums.length ; i++) {
            preProd.push(preProd[i-1]*nums[i-1]);
        }
        // const suffProd = [1];
        // for(let i=nums.length - 1 ; i>0 ; i--) {
        //     suffProd.push(suffProd[nums.length - i - 1] * nums[i])
        // }

        // suffProd.reverse();
        
        let res = [];
        let end = 1;
        for(let i = nums.length - 1; i>=0 ; i--) {
            res.push(preProd[i] * end);
            end *= nums[i];
        }
        return res.reverse();
    }
}
