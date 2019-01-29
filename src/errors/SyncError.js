const FriendlyError = require('./FriendlyError');
/**
 * An error for syncing
 * @extends {FriendlyError}
 */
class SyncError extends FriendlyError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'SyncError';
    }
}
module.exports = SyncError;