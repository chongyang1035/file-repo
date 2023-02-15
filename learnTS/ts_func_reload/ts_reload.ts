function f(a:string,b:string):string
function f(a:number,b:number):number
function f(a: string | number, b: string | number):string|number {
    if (typeof a === 'string') {
        return a + ':' + b; // no error but b can be number!
    } else {
        return <number>a + <number>b; // error as b can be number | string
    }
}

f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
f('a', 'b') // Ok
