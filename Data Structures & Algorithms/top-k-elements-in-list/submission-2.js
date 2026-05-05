class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hmap = {};
        for(let i=0 ; i<nums.length ; i++) {
            if(hmap[nums[i]] != undefined) hmap[nums[i]] = hmap[nums[i]]+1;
            else hmap[nums[i]] = 1;
        }
        // const descSortArr = Object.entries(hmap).sort(([, a], [,b]) => b-a);
        // console.log('descSortArr: ', descSortArr);
        // let res = [];
        // for(let i=0 ; i<k ; i++) {
        //     res = [...res, descSortArr[i][0]]
        // }
        // return res;

        let arr = new Array(nums.length + 1);
        console.log('before arr: ', arr);

        Object.entries(hmap).map(([k, v]) => {
            arr[v] = [...(arr[v] ?? []), k];
        });

        console.log('after arr: ', arr);

        let res = [];
        for(let i=arr.length -1 ; i>=0 ; i--) {
            // console.log(`arr[${i}][0]: `, arr[i]);
            if(arr[i] != undefined) {
                
                res = [...res, ...arr[i]];
                console.log('res: ', res)
                if(res.length >= k) break;
            }
           
        }
        return res;
    }
}
