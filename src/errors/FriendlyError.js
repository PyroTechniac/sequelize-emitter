/**
 * A base error for all Sequelize-Emitter errors
 * @extends {Error}
 */
class FriendlyError extends Error {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'FriendlyError';
    }
}
module.exports = FriendlyError;