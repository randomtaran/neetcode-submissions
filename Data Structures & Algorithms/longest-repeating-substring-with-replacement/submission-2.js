class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hmap = {};
        let maxL = 0;
        // let maxFreq = 0;
        let l = 0;
        for(let r = 0 ; r<s.length ; r++) {
            hmap[s[r]] = ( hmap[s[r]] ?? 0 ) + 1;
            while((r-l+1) - Math.max(...Object.values(hmap)) > k){
                hmap[s[l]]--;
                l++;
            }
            maxL = Math.max(maxL, r-l+1);
        }
        return maxL;
    }
}
