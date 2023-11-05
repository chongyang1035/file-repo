// 说明:

// 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
// 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

export class QueueOfStack {
    stackOne: any[] = [];
    push (v: any): void {
        this.stackOne.push(v);
    }

    pop (): void {
        this.stackOne.pop();
    }

    peek (): void {

    }

    empty (): boolean {
        return this.stackOne.length === 0;
    }
}