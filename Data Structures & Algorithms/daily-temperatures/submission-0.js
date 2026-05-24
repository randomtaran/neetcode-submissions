class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = [];

        for(let i=0 ; i<temperatures.length ; i++){
            let hotMax = 0;
            for(let j=i+1; j<temperatures.length ; j++){
                if(temperatures[j]>temperatures[i]){
                    hotMax = j-i;
                    res.push(hotMax);
                    j = temperatures.length;
                }
            }
            if(hotMax === 0) res.push(hotMax);
        }
        return res;
    }
}
