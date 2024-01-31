

class Queue <T> {

    private _arr : T[] = []; 

    push(num : T) {
        this._arr.push(num); 
    }

    pop () : T | undefined {
        return this._arr.shift();
    }
} 

let queue = new Queue<number>();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop());

let queueArray = new Queue<Array<number>>();

queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop());
