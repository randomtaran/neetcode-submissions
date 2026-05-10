class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        for(let i = 0; i<heights.length ; i++){
            for(let j=i+1 ; j<heights.length ; j++){
                if(heights[i] >  heights[j]){
                    maxArea = Math.max(maxArea, (j-i)*heights[j])
                }else{
                    maxArea = Math.max(maxArea, (j-i)*heights[i])
                }
                
            }
        }
        return maxArea;
    }
}
