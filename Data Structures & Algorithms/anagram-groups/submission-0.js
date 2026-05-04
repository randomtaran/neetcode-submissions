class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = {};
        let arr = []
        for(let i=0 ; i<strs.length ; i++) {
            const s = strs[i].split('').sort().join('');
            arr.push(s);
        }
        console.log('arr: ', arr);

        for(let i=0 ; i<arr.length ; i++) {
            if(Array.isArray(m[arr[i]]))
                m[arr[i]] = [...m[arr[i]], i];
            else
                m[arr[i]] = [i];
        }

        console.log('m: ', m);
        let ans = [];

        Object.values(m).forEach(o => {
            const group = o.map(i => strs[i]);
            ans = [...ans, group];
        })

        return ans;

    }
}
