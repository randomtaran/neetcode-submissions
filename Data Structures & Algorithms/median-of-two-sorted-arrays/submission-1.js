class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums3 = [];
        let i=0;
        let j=0;
        while(i<nums1.length || j<nums2.length){
            if(i<nums1.length && j<nums2.length && nums1[i]<=nums2[j]){
                nums3.push(nums1[i]);
                i++;
            }else if(i<nums1.length && j<nums2.length && nums1[i]>nums2[j]){
                nums3.push(nums2[j]);
                j++;
            }else if(i>=nums1.length && j<nums2.length){
                nums3.push(nums2[j]);
                j++
            }else if(i<nums1.length && j>=nums2.length){
                nums3.push(nums1[i]);
                i++
            }
        }
        
        if(nums3.length%2 === 0){
            let mid = nums3.length/2;
            return (nums3[mid]+nums3[mid-1])/2;
        }else{
            let mid = Math.trunc(nums3.length/2);
            return nums3[mid];
        }
    }
}
