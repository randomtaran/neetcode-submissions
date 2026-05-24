class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 0 || s.length === 1) return false;

        const hmap = {
            '}': '{',
            ']': '[',
            ')': '('
        };

        const stack = [];

        for(let i=0 ; i<s.length ; i++){
            if(hmap[s[i]]) {
                const top = stack.pop();
                if(top != hmap[s[i]]) return false;
            }else{
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
