class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let currentArea;
        let st = [];

        for(let i = 0; i<heights.length ; i++){
            while(st.length && heights[st[st.length-1]] > heights[i]){
                let top = st.pop();
                if(st.length === 0){
                    currentArea = heights[top]*i
                }else{
                    currentArea = heights[top]*(i-st[st.length-1]-1)
                }
                maxArea = Math.max(maxArea,currentArea);
            }
            st.push(i);
        }

        while(st.length){
            let top = st.pop();
            if(st.length === 0){
                currentArea = heights[top] * heights.length;
            }else{
                currentArea = heights[top] * (heights.length - st[st.length-1] -1);
            }
            maxArea = Math.max(maxArea, currentArea)
        }
        return maxArea;
    }
}