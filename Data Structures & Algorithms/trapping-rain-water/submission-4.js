class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = [0];
        let maxRight = [0];
        let j = height.length - 1;
        for (let i = 1; i < height.length; i++ && j--) {
            maxLeft.push(Math.max(maxLeft[i - 1], height[i - 1]));
            maxRight.push(Math.max(maxRight[i - 1], height[j]))
        }
        maxRight.reverse();
        let area = 0;
        for (let i = 0; i < maxLeft.length; i++) {
            if (Math.min(maxLeft[i], maxRight[i]) - height[i] >= 0) {
                area += Math.min(maxLeft[i], maxRight[i]) - height[i];
            }
        }
        return area;
    }
}
