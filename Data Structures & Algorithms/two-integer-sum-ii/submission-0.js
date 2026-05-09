class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0 ;
        let j = numbers.length-1 ;

        while(i<numbers.length && j>=0) {
            // console.log(`numbers[${i}]: ${numbers[i]}`);
            // console.log(`numbers[${j}]: ${numbers[j]}`);
            if(numbers[i] + numbers[j] === target) return [i+1, j+1];
            else if(numbers[i] + numbers[j] > target) j--;
            else i++;
        }
    }
}
