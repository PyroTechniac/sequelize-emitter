const GenericError = require('./GenericError');
/**
 * An error for authentication
 * @extends {GenericError}
 */
class AuthError extends GenericError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'AuthError';
    }
}
module.exports = AuthError;