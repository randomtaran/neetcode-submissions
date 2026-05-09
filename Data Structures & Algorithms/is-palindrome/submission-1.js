class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = [];
        s = s.toLowerCase()
        for(let i =0 ; i<s.length ; i++) {
            console.log(`${s[i]}: ${s.charCodeAt(i)}`)
            if((s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 122)
                || (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
            ){
                arr.push(s[i]);
            }
        }
        const originalArr = [...arr];
        arr.reverse();
        return originalArr.every((ele, i) => ele === arr[i]);
        // return 
    }
}
