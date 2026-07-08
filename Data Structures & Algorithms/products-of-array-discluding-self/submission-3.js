class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const preProd = [1];
        for (let i = 1; i < nums.length; i++) {
            preProd.push(preProd[i - 1] * nums[i - 1]);
        }
        let rightProd = 1;
        
        for (let i = nums.length-1; i >= 0; i--) {
            preProd[i] = preProd[i] * rightProd;
            rightProd *= nums[i];
        }
        return preProd;
    }
}
