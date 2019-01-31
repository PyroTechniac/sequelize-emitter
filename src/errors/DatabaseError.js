const GenericError = require('./GenericError');
/**
 * An error for when the database fails at something
 * @extends {GenericError}
 */
class DatabaseError extends GenericError {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
    }
}
module.exports = DatabaseError;