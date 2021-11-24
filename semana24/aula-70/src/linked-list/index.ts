class NodeItem {
    constructor(
        public value: any,
        public next: NodeItem | null = null
    ){}
}

export class LinkedList {
    constructor(
        private head: NodeItem | null = null
    ){}
    add(value: any): void{
        if(!this.head){
            this.head = new NodeItem(value);
            return
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = new NodeItem(value);
    }
    printList(): void {
        let currentNode: NodeItem | null = this.head;
        while(currentNode !== null){
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
        return
    }
    start(): NodeItem | null{
        const currentNode: NodeItem | null = this.head;
        
        if(currentNode !== null){
            return currentNode
        }
        return null
    }
    next(node: NodeItem): NodeItem | null{
        if(this.start()){
            return null
        }
        
        return node.next
    }
}

const myList = new LinkedList();
// myList.add("Maçã");
// myList.add("Banana");
// myList.add("morango");

console.log(myList.start());