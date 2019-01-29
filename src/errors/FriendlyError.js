module.exports = class FriendlyError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'FriendlyError';
    }
};