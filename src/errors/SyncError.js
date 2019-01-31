const GenericError = require('./GenericError');
/**
 * An error for syncing
 * @extends {GenericError}
 */
class SyncError extends GenericError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'SyncError';
    }
}
module.exports = SyncError;