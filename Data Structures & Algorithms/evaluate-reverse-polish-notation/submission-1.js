class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b),
        }

        for (const t of tokens) {
            if (ops[t]) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[t](a, b));
            } else {
                stack.push(Number(t));
            }
        }

        return stack.pop();

        // return tokens.reduce((acc, t) => {
        //     if(ops[t]){
        //         const op2 = stack.pop();
        //         const op1 = stack.pop();
        //         acc+= Number(ops[t](op1,op2));
        //         console.log('acc: ', acc);
        //         stack.push(acc);
        //     }else{
        //         stack.push(Number(t));
        //     }

        // }, 0)
    }
}
