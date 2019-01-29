const FriendlyError = require('./FriendlyError');
/**
 * An error for when options are invalid
 * @extends {FriendlyError}
 */
class OptionsError extends FriendlyError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'OptionsError';
    }
}
module.exports = OptionsError;