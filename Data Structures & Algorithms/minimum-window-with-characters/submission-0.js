class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        let winMap = new Map();
        let tMap = new Map();

        for (let i = 0; i < t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
        }

        let have = 0;
        let need = tMap.size;

        let result = [-1, -1];
        let resultLength = 1000;

        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];

            winMap.set(char, (winMap.get(char) ?? 0) + 1);

            if (tMap.has(char) && winMap.get(char) === tMap.get(char)) {
                have++;
            }

            while (have === need) {
                if ((r - l + 1) < resultLength) {
                    resultLength = r - l + 1;
                    result = [l, r];
                }
                let leftChar = s[l];

                winMap.set(leftChar, winMap.get(leftChar) - 1);

                if (tMap.has(leftChar) && winMap.get(leftChar) < tMap.get(leftChar)) {
                    have--;
                }
                l++;
            }
        }

        return resultLength !== Infinity
            ? s.slice(result[0], result[1] + 1)
            : "";
    }
}