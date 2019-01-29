const FriendlyError = require('./FriendlyError');
/**
 * An error for when emitting has an error
 * @extends {FriendlyError}
 */
class EmitError extends FriendlyError {
    constructor(message) {
        super(message);
        this.name = 'EmitError';
    }
}
module.exports = EmitError;