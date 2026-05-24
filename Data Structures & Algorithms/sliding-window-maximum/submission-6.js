class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k === 1) return nums;

        let res = [];
        let l = 0;
        let r = 0;

        const { Deque } = require('@datastructures-js/deque');
        const q = new Deque();

        while (r < nums.length) {

            // remove smaller values from back
            while (!q.isEmpty() && nums[q.back()] < nums[r]) {
                q.popBack();
            }

            q.pushBack(r);

            // remove indices out of window
            if (q.front() < l) {
                q.popFront();
            }

            // window reached size k
            if ((r + 1) >= k) {
                res.push(nums[q.front()]);
                l++;
            }

            r++;
        }

        return res;
    }
}