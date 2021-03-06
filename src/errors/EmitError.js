const GenericError = require('./GenericError');
/**
 * An error for when emitting has an error
 * @extends {GenericError}
 */
class EmitError extends GenericError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'EmitError';
    }
}
module.exports = EmitError;