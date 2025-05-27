export default class InvalidNodeError extends Error {
    constructor() {
        super('Invalid nodes. Please introduce a valid collection');
    }
}