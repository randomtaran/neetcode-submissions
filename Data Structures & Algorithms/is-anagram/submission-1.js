class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        // const map1 = {};
        // const map2 = {};

        // for(let i=0 ; i< s.length ; i++){
        //     map1[s[i]] = (map1[s[i]] ?? 0) + 1;
        //     map2[t[i]] = (map2[t[i]] ?? 0) + 1;
        // }
        // console.log('map1: ', map1);
        // console.log('map2: ', map2);
        // if(map1 == map2) return true;
        // else return false;

        const s1 = [...s].sort();
        const t1 = [...t].sort();
        console.log('s1: ', s1);
        console.log('t1: ', t1);
        const isValid = s1.every((val, idx) => val === t1[idx]);
        return isValid;
    }
}
