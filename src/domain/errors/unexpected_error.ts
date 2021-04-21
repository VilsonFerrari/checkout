// This is just for example purpose.
// Some level of error abstraction.
export class UnexpectedError extends Error {
    constructor() {
        super('Something went wrong!');
        this.name = 'UnexpectedError';
    }
}