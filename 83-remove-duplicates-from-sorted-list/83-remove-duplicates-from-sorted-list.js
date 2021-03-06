/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    
    let pointer1 = head;
    let pointer2 = head.next;
    
    while (pointer2) {
        if (pointer2.val === pointer1.val) {
            if (!pointer2.next) {
                pointer1.next = null;
                break;
            }
            
            if (pointer2.next.val === pointer1.val) {
                pointer2 = pointer2.next;
                pointer1.next = pointer2;
                continue
            }

            pointer1.next = pointer2.next;
            pointer1 = pointer2.next;
            pointer2 = pointer2.next.next;
            continue
        }
        pointer1 = pointer2;
        pointer2 = pointer2.next;
    }
    return head;
};