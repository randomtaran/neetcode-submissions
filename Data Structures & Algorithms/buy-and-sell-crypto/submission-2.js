class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let i=0;
        let j=prices.length-1;
        let minLeft = [prices[0]]
        for(let i=1; i<prices.length ; i++) {
            minLeft.push(Math.min(minLeft[i-1], prices[i]));
        }
        // console.log('minLeft: ', minLeft);
        // return maxProfit;

        for(let i = 0; i<prices.length ; i++){
            if(prices[i] - minLeft[i] > maxProfit) {
                maxProfit = prices[i] - minLeft[i];
            }
        }
        return maxProfit;
    }
}
