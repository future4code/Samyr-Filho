import { LinkedList } from "../linked-list";

class Stack{
    constructor(
        private frame: LinkedList = new LinkedList
    ) {}

    push(item: any): void {
        this.frame.add(item)
    }

    pop(): any {
        
        let previusNode = null;
        let currentNode = this.frame.start();
        
        if(previusNode === null){
            return
        }
        // let currentNode = this.frame.next(previusNode);
        if(currentNode === null){

        }
        while(currentNode.next){
            currentNode = currentNode?.next
        }

        const lastItem = this.frame[this.frame.length - 1];
        this.frame.length--;
        this.length--;
        return lastItem;
    }

    peek(): any {
        return this.frame[this.frame.length - 1];
    }
    isEmpty(): boolean{
        return this.frame.start === null
    }
    printStack(): void{
        for(let i = 0; i < this.length; i++){
            console.log(this.frame[i]);
            
        }
        return
    }
}

const myList = new LinkedList();
myList.add("Maçã");
myList.add("Banana");
myList.add("morango");

const myStack = new Stack();
myStack.push(myList)