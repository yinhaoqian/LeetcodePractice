/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let utils = require("./_util");
let ListNode = utils.ListNode;
let asList = utils.asList;

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	if (head === null) return false;
	let hashSet_S = new Set();
	let currNode_L = head;
	while (currNode_L !== null) {
		if (hashSet_S.has(currNode_L))
			return true;
		else {
			hashSet_S.add(currNode_L);
			currNode_L = currNode_L.next;
		}
	}
	return false;
};