/**
 * 队列
 * 先进先出
 * 功能：入队列，出队列，队列大小，清空队列，输出队列
 */
class Queue {
    constructor() {
        this.queueList = [];
    }

    //入队列
    enterQueue(value) {
        this.queueList.push(value);
        return this.queueList;
    }

    //出队列
    outQueue() {
        return this.queueList.shift();
    }

    //队列长度
    lengthQueue() {
        return this.queueList.length;
    }

    //清空队列
    clearQueue() {
        return this.queueList = [];
    }

    //输出队列
    toQueue() {
        return this.queueList.toString();
    }
}

const testQueue = new Queue();
testQueue.enterQueue(1);
testQueue.enterQueue(2);
testQueue.enterQueue(3);
console.log(testQueue.enterQueue(4));
console.log(testQueue.toQueue());
console.log(testQueue.outQueue());
console.log(testQueue.lengthQueue());
console.log(testQueue.clearQueue());