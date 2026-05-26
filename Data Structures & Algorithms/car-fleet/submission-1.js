class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = [];
        for(let i=0 ;i<position.length ; i++) {
            pair.push([position[i], speed[i]])
        }
        pair.sort(([a, b], [c, d]) => c - a);

        const st = [];

        for(let i=0 ; i<pair.length ; i++){
            const time = (target - pair[i][0]) / pair[i][1];
            st.push(time);
            if(st.length > 1 && st[st.length - 1] <= st[st.length-2])
                st.pop();
        }

        return st.length;
    }
}
