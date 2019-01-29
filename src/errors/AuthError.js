const FriendlyError = require('./FriendlyError');
/**
 * An error for authentication
 * @extends {FriendlyError}
 */
class AuthError extends FriendlyError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'AuthError';
    }
}
module.exports = AuthError;