class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minLeft = prices[0];

        for(let i = 1; i<prices.length ; i++){
            minLeft = Math.min(minLeft, prices[i]);
            if(prices[i] - minLeft > maxProfit) {
                maxProfit = prices[i] - minLeft;
            }
        }
        return maxProfit;
    }
}
