class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encStr = '';
        strs.forEach((s) => {
            encStr += s.length + '#' + s;
        });
        console.log('encStr: ', encStr);
        return encStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        for(let i = 0 ;i<str.length ; i++) {
            let j = i;
            while(j<str.length && str[j] != '#') {j++}
            let l = parseInt(str.slice(i, j));
            if(l === 0) {
                strs = [...strs, ""];
                i = i+l+1;
            }
            else if(l && typeof l === "number") {
                console.log('pushing: ', str.slice(j+1, j+1+l));
                strs = [...strs, str.slice(j+1, j+1+l)]
                i = i+l+1;
            };
            
        }
        return strs;
    }
}
