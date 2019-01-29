const FriendlyError = require('./FriendlyError');
/**
 * An error for when emitting has an error
 * @extends {FriendlyError}
 */
class EmitError extends require('./FriendlyError') {
    constructor(message)
}
module.exports = EmitError;