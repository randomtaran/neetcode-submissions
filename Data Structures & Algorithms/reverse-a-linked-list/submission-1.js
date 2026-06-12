/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null || head.next === null) return head;

        let fwd = head.next;
        let prev = null;

        while(fwd != null){
            head.next = prev;
            prev = head;
            head = fwd;
            fwd = fwd.next;
        }
        head.next = prev;
        return head;
        
    }
}
