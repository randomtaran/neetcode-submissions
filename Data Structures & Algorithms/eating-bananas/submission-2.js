class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let right = Math.max(...piles);
        let left = 1;
        let ans = right;
        while (left <= right) {
            let mid = Math.trunc((left+right)/2);
            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i]/mid);
            }
            if(hours <= h) {
                ans = mid;
                right = mid -1;
            }else{
                left = mid+1;
            }
        }
        return ans;
    }
}
