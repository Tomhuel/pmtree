export default class NoJSONFileError extends Error {
    constructor(filename: string) {
        super(`No JSON file found in ${filename}`);
    }
}