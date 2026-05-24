class MinStack {
    constructor() {
        this.st = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.st.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.st.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.st);
    }
}
