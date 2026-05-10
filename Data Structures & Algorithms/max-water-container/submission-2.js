class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let i=0;
        let j=heights.length - 1;
        let flag = 1;
        while(i<heights.length && j>=0){
            if(heights[i] > heights[j]){
                maxArea = Math.max(maxArea, (j-i)*heights[j]);
                j--;
            }else{
                maxArea = Math.max(maxArea, (j-i)*heights[i]);
                i++;
            }
            // if(flag){
            //     i++;
            //     flag=0;
            // }else{
            //     j--;
            //     flag=1;
            // }
        }
        // for(let i = 0; i<heights.length ; i++){
        //     for(let j=i+1 ; j<heights.length ; j++){
        //         if(heights[i] >  heights[j]){
        //             maxArea = Math.max(maxArea, (j-i)*heights[j])
        //         }else{
        //             maxArea = Math.max(maxArea, (j-i)*heights[i])
        //         }
                
        //     }
        // }
        return maxArea;
    }
}
