class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false
        const a1 = new Array(26).fill(0);
        const a2 = new Array(26).fill(0);

        let l = 0;
        let r = 0;

        while(r < s1.length) {
            a1[s1.charCodeAt(r) - 'a'.charCodeAt(0)]+=1;
            a2[s2.charCodeAt(r) - 'a'.charCodeAt(0)]+=1;
            r+=1;
        }
        r-=1;

        while(r < s2.length) {
            if(a1.every((val, i) => val === a2[i])) return true;//hasharr match hogya

            r+=1;
            if(r != s2.length) {
                a2[s2.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;
            }
            a2[s2.charCodeAt(l)-'a'.charCodeAt(0)] -= 1;//win shrink
            l+=1;
        }
        return false;
    }
}
