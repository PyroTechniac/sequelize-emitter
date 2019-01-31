const GenericError = require('./GenericError');
/**
 * An error for when options are invalid
 * @extends {GenericError}
 */
class OptionsError extends GenericError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'OptionsError';
    }
}
module.exports = OptionsError;