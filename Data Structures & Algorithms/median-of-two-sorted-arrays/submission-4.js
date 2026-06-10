class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a;
        let b;
        let total = nums1.length + nums2.length;
        let half = Math.trunc(total/2);
        if(nums1.length < nums2.length){
            a = nums1;
            b = nums2;
        }else{
            a = nums2;
            b = nums1;
        }

        let left = 0;
        let right = a.length;
        while(true) {
            let mida = Math.trunc((left+right)/2)
            let midb = half - mida;

            let lefta = mida>0 ? a[mida-1] : -Infinity;
            let righta = mida < a.length ? a[mida] : Infinity;
            let leftb = midb>0 ? b[midb-1] : -Infinity;
            let rightb = midb < b.length ? b[midb] : Infinity;

            if (lefta <= rightb && leftb <= righta){
                if(total%2 === 0){
                    return (Math.max(lefta, leftb) + Math.min(righta, rightb))/2;
                }else{
                    return Math.min(righta, rightb)
                }
            } else if(lefta > rightb){
                right = mida - 1;
            } else{
                left = mida + 1;
            }
        }
    }
}
