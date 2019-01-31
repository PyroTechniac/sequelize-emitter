/**
 * A base error for all Sequelize-Emitter errors
 * @extends {Error}
 */
class GenericError extends Error {
    /** @param {string} message - The error message */
    constructor(message) {
        super(message);
        this.name = 'GenericError';
    }
}
module.exports = GenericError;