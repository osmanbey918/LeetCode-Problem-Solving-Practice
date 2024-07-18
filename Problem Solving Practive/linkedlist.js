// // Define the Node class for the linked list
// class Node {
//     constructor(data) {
//         this.data = data; // Data storedjn the node
//         this.next = null; // Pointer to the next node, initially null
//     }
// }

// // Define the LinkedList class
// class LinkedList {
//     constructor() {
//         this.head = null; // Initially, the list is empty, so head is null
//     }

//     // Method to add a new node at the end of the linked list
//     append(data) {
//         const newNode = new Node(data); // Create a new node with the given data

//         // If the list is empty, make this new node the head
//         if (this.head === null) {
//             this.head = newNode;
//             return;
//         }

//         // Traverse the list to find the last node
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }

//         // Assign the new node to the next of the last node
//         current.next = newNode;
//     }

//     // Method to print the elements of the linked list
//     print() {
//         let current = this.head;
//         let listStr = "";
//         while (current !== null) {
//             listStr += current.data + " -> ";
//             current = current.next;
//         }
//         listStr += "null";
//         console.log(listStr);
//     }
// }

// // Example usage:
// const myList = new LinkedList();

// myList.append(10);
// myList.append(20);
// myList.append(30);

// //myList.print(); // Output: 10 -> 20 -> 30 -> null
// console.log(myList.print())















// class myNode {
//     constructor(data) {
//         this.data = head;
//         this.next = null;

//     }
// }

// class myLinkedList {
//     constructor() {
//         this.data = null
//     }
//     pushdata(data) {
//         const newnode = new myNode(data);
//         if (this.data === null) {
//             this.head = newnode
//             return
//         }
//         let current = this.data
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = newnode;
//     }
// }









// var minimalKSum = function (nums, k) {
//    // nums.sort((a, b) => a - b)
//    let set = new Set(nums)
//    let num = [...set]
//     let res = 0
//     let kcount = 0
//     while (k > 0) {
//         for (let i = 0; i < num.length; i++) {
//             kcount++
//             if (!num.includes(kcount)) {
//                 res += kcount
//                 k--
//                 break;
//             }

//         }
//     }
//     return res
// // };
// var minimalKSum = function (nums, k) {
//     let res = 0
//     let kcount = 0
//    // nums.sort((a,b) => a-b)
//         for (let i = 0; i < nums.length; i++) {
//             kcount++
//             if (!nums.includes(kcount)) {
//                 res += kcount
//                 k--
//                 // if(k == 0){

//                 //     break;
//                 // }
//             }

//         }

//     return res
// };   
// console.log(minimalKSum([2132717,6365886,1980222,8350525,1833374,4617692,6338840,2165307,3967191,7516151,7736082,5139900,9861893,1964417,
//     7725916,2235350,3193338,9172839,3764056,5599361,7047859,5504758,9965085,120860,2892225,9716886,8408188,4146272,758989,8510357,2807262,
//     9871994,1419660,7324717,7772302,7889697,9599622,6607191,1272964,9587693,4155533,8149218,1566363,5658873,4955308,2685054,8148241,4625128,
//     3003594,1579013,2806169,252653,7896727,3095607,6121913,5410107,9686181,7772451,9156788,1229131,6782567,8234358,2918656,7113538,2508620,1989723,4637502,1152845,2939601,3021480,8728952,5583095,3420622,1830943,5207436,4099802,8824227,2856731,9163956,9872700,9272515,3566155,5069013,1327996,6366126,6392194,6848738,353478,1411109,234484,3837327,6309800,9050216,6360477,4799553,2877410,4955135,1487171,5910580,4257389,2331112,4380948,1326464,4063369,5640621,6225658,4999157,4725820,6145758,8057113,4728792,4689282,1833793,2787969,5847273,3039015,2759265,4274489,9255595,4514835,9267121,5060462,5903811,9912628,6208597,4296621,6316936,8468831,2169034,5863942,4972175,9088412,1292337,8797319,4680815,6905709,4363026,3478551,8378228,4616658,9510962,303401,5055645,6670417,748184,7446417,9433118,7930196,5567900,353564,5027724,1891760,8606289,5130368,2210983,2424887,1786944,2413994,1365639,6900946,4483114,6710712,424014,4598113,1812567,5258366,2497317,3375402,3882354,7489732,734152,3611704,2274479,244446,4804385,3674799,3361297,5876190,6568876,5471880,3639093,7469798,4150563,1409068,5130543,5123259,1106130,2637667,3700190,4697673,5967381,2745901,7612816,8961659,1718926,9017927,5882781,6454576,9530130,3043510,6479352,8487687,2898325,4529024,4353339,6852829,6958083,579741,3287277,6463284,3348810,1201863,929421,3385113,3625864,5768328,885266,8684339,6483619,7893729,2882839,8840213,3075755,2931564,1534467,2699987,9176649,4412914,7566833,7397855,2996914,2980197,2762694,5368368,3963891,2362259,4764641,2689739,595262,6161797,1167052,2262081,5394770,7314982,1783137,9576942,2809638,9184635,7690738,1350487,7206622,6162788,6934259,111590,3661124,2764992,7661790,3078865,223795
// ,9378017,2839228,7370364,8600789,1734377,9367991,9526665,3671792,5308504,2274032,3826316,8745216,7952020,9391762,4869713,1382040,1587761,473500,
// 8803392,811436,6605013,810495,1930614,6933732,73533,210277,3690711,1374083,504971,4901227,4273554,7880615,654965,7073815,2626937,9595142,1706530,
// 7796412,6022029,6159967,1748775,5449335,8759494,7096732,9472656,3513989,3292260,7632058,6587668,3299166,4932091,6726380,8325135,5153815,4473716,
// 442607,5604877,8224812,1187274,3590581,7937623,3785640,2757026,5395814,8203766,8738458,6399866,4530451,6348123,1802427,8690337,2593318,5782511,8881769,7229677,8587642,8151968,7625428,9446246,4071718,3760523,4003508,5411851,1320515,8956495,691572,1556975,483266,5402301,4080038,2816584,9329282,1637569,8372715,5822529,9280656,2648484], 5140251));




// var findTheDistanceValue = function (arr1, arr2, d) {
//     let c = 0
//     let flag = false
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(Math.abs(arr1[i] - arr2[j]) <= d){
//                 flag = true
//                 break;
//             }

//         }
//         if(flag == true){
//             flag = false
//             continue
//         }
//         c++

//     }
//     return c
// };
// console.log(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3));








// class node {
//     constructor(data) {
//         this.data = data
//         this.head = null
//     }
// }
// class list {
//     constructor() {
//         this.head = null
//     }
//     append(data) {
//         const newnode = new node(data)
//         newnode.next = this.head
//         this.head = newnode
//     }
//     lastadd(data) {
//         const newnode = new node(data)
//         if (!this.head) {
//             this.head = newnode
//             return

//         }
//         let current = this.head
//         while (current.next) {
//             current = this.head
//         }
//         current.next = newnode
//     }
//     size() {
//         let c = 0

//         let current = this.head
//         while (current.next) {
//             c++
//             current = this.head
//         }
//         return c
//     }
//     adddata(i, data) {
//         if (i < 0 || i > this.size()) {
//             console.log('error');
//         }
//         const newnode = new node(data)
//         if (i === 0) {

//             newnode.next = this.head
//             this.head = newnode
//             return
//         }
//         let current = this.head
//         for (let j = 0; j < i - 1; j++) {
//             current=current.next

//         }
//         newnode.next=current.next
//         current.next=newnode
//     }
//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data)
//             curr = curr.next
//         }
//     }
// }
// let p = new list()
// p.append(5)
// p.append(9)
// //p.lastadd(6)
// p.print()











// // Define the Node class
// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// // Define the LinkedList class
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Insert node at the beginning of the linked list
//     insertFirst(data) {
//         this.head = new Node(data, this.head);
//     }

//     // Print all elements in the linked list
//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Usage example:
// const ll = new LinkedList();

// ll.insertFirst(10);
// ll.insertFirst(20);
// ll.insertFirst(30);

// ll.printList();

// https://leetcode.com/problems/merge-two-sorted-lists/submissions/1322992628/




// class node {
//     constructor(data, next = null){
//         this.data = data
//         this.next = next;
//     }
// }

// class linklist{
//     constructor(){
//         this.head = null;
//     }


//     addbegin(data){
//         let newnode = new node(data);
//         newnode.next = this.head
//         this.head = newnode
//     }

//     addLast(data){
//         let newnode = new node(data);
//         // If the list is empty, make the new node the head
//         if (this.head === null) {
//             this.head = newnode;
//             return;
//         }
//         let curr = this.head;
//         // Traverse to the end of the list
//         while (curr.next !== null) {
//             curr = curr.next;
//         }
//         // Add the new node at the end
//         curr.next = newnode;
//     }








//     print(){
//         let curr = this.head
//         while(curr != null){
//             console.log(curr.data);
//             curr = curr.next
//         }
//     }
// }
// let list = new linklist()
// list.addbegin(9)
// list.addbegin(8)
// list.addbegin(7)
// list.print()






// class node {
//     constructor(data, next = null){
//         this.data = data;
//         this.next = next;
//     }
// }

// class linklist {
//     constructor(){
//         this.head = null;
//     }

//     adding(data){
//         let newnode = new node(data);
//         newnode.next = this.head;
//         this.head = newnode;
//     }

//     print(){
//         let curr = this.head;
//         while(curr != null){
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }
// }

// let list = new linklist();
// list.adding(9);
// list.adding(7);
// list.adding(8);
// list.print();



// class node {
//     constructor(data, next = null){
//         this.data = data
//         this.next = next
//     }
// }

// class list{
//     constructor(){
//         this.head = null
//     }

//     add(data){
//         let newnode = new node(data)
//         newnode.next = this.head
//         this.head = newnode
//     }
//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next
//         }
//     }
// }
// let newlist = new list()
// newlist.add(9)
// newlist.add(3)
// newlist.add(3)
// newlist.add(6)
// newlist.print()



// class node {
//     constructor(data, next = null) {
//         this.data = data
//         this.next = next
//     }
// }

// class list {
//     constructor(){
//         this.head = null
//     }
//     add(data){
//         let newnode = new node(data)
//         newnode.next = this.head
//         this.head = newnode
//     }
//     print(){
//         let curr = this.head
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next

//         }
//     }
// }
// let listt = new list()
// listt.add(3)
// listt.add(4)
// listt.add(5)
// listt.add(9)
// listt.print()


// class node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// class list {
//     constructor() {
//         this.head = null
//     }
//     add(data) {
//         let newnode = new node(data)
//         newnode.next = this.head
//         this.head = newnode
//     }
//     print() {
//         let curr = this.head
//         while (curr) {
//             console.log(curr.data);
//             curr = curr.next
//         }
//     }
// }
// let listt = new list()
// listt.add(3)
// listt.add(4)
// listt.add(5)
// listt.add(9)
// listt.print()













// class ListNode {
//     constructor(val, next = null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }

// }

// var removeElements = function (head, val) {
//     let curr = head
//     while (curr) {
//         console.log(curr.val)
//         curr = curr.next
//     }
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */




// var getDecimalValue = function(head) {
//     let s = ''
//     while(head){
//         s += head.val
//         head = head.next
//     }
//     return parseInt(s, 2)
// };



// class node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class list {
//     constructor() {
//         this.head = null;
//     }
//     add(data) {
//         let newnode = new node(data);
//         newnode.next = this.head;
//         this.head = newnode;
//     }
//     print() {
//         let curr = this.head;
//         while (curr) {
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }
//     delete(data) {
//         if (this.head === null) return

//         // Case 1: If the node to be deleted is the head node
//         if (this.head.data === data) {
//             this.head = this.head.next; // Move head to next node
//             return;
//         }


//         let curr = this.head;
//         while (curr !== null) {
//             if (curr.next.data == data) {
//                 curr.next = curr.next.next;
//                 return;
//             }
//             curr = curr.next;
//         }
//     }
// }
// let newlist = new list()
// newlist.add(9)
// newlist.add(4)
// newlist.add(6)
// newlist.delete(6)
// newlist.delete(4)
// newlist.add(4)
// newlist.add(4)
// newlist.print()




// Define a Node class
function Node(data, next = null) {
    this.data = data;
    this.next = next;
}


function LinkedList() {
    this.head = null;

    this.add = function(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    };


    this.print = function() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    };

}

// Example usage:
let newList = new LinkedList();
newList.add(9);
newList.add(4);
newList.add(6);

console.log("Before deletion:");
newList.print(); // Output: 6, 4, 9

newList.delete(6);
console.log("After deletion of 6:");
newList.print(); // Output: 4, 9
