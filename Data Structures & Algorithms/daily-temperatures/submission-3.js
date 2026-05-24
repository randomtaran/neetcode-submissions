class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];
        // for(let i=0 ; i<temperatures.length ; i++){
        //     let hotMax = 0;
        //     for(let j=i+1; j<temperatures.length ; j++){
        //         if(temperatures[j]>temperatures[i]){
        //             hotMax = j-i;
        //             res.push(hotMax);
        //             break;
        //         }
        //     }
        //     if(hotMax === 0) res.push(hotMax);
        // }

        for (let i = 0; i < temperatures.length; i++) {
            while(stack.length && temperatures[i] > temperatures[stack.at(-1)]){
                const top = stack.pop();
                res[top] = i-top;
            }
            stack.push(i);
        }

        return res;
    }
}
