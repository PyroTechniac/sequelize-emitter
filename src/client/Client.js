const Sequelize = require('sequelize');
const { EventEmitter } = require('events');
const FriendlyError = require('../errors/FriendlyError');
/**
 * The client for starting the emitter
 * @extends {EventEmitter}
 */
class Client extends EventEmitter {
    /**
     * @param {Object} options - Options for the client
     * @param {string} [options.name = database] - Name of the database (Defaults to 'database')
     * @param {string} [options.username = null] - Username for the database (Defaults to null)
     * @param {string} [options.password = null] - Password for the database (Defaults to null)
     * @param {string} [options.host = localhost] - Host for the database (Defaults to 'localhost')
     * @param {number} [options.port] - Port for the database (Defaults to )
     * @param {string} [options.dialect = sqlite] - Dialect for the database
     * @param {(Function|Boolean)} [options.logging = console.log] - A function that gets executed everytime sequelize would log something
     * @param {(Object|Boolean)} [options.operatorAliases = true] - Strting based operator alias
     */
    constructor(options) {
        super();
        const setupOptions = this._setupOptions(options);
        console.log(setupOptions);
    }
    /**
     * @param {Object} options - Options to set up
     * @private
     */
    _setupOptions(options) {
        this._validateOptions(options);
        const arr = [];
        if (!options.name) {
            arr.push('database');
        }
        else {
            arr.push(options.name);
            delete options.name;
        }
        if (!options.username) {
            arr.push(null);
        }
        else {
            arr.push(options.username);
            delete options.username;
        }
        if (!options.password) {
            arr.push(null);
        }
        else {
            arr.push(options.password);
            delete options.password;
        }
        arr.push(options);
        return arr;
    }
    /**
     * @param {Object} options - Options to validate
     * @private
     */
    _validateOptions(options) {
        if (!options) throw new ReferenceError('Options must be defined');
        if (typeof options !== 'object' || options instanceof Array) throw new TypeError('Options must be an object');
        if (typeof options.name !== 'string' && options.name !== undefined) throw new TypeError('Database name must be a string');
        if (typeof options.username !== 'string' && (options.username !== undefined && options.username !== null)) throw new TypeError('Username must be a string');
        if (typeof options.password !== 'string' && (options.password !== undefined && options.password !== null)) throw new TypeError('Password must be a string');
        if (typeof options.host !== 'string' && options.host !== undefined) throw new TypeError('Host must be a string');
        if (typeof options.port !== 'number' && options.port !== undefined) throw new TypeError('Port must be a number');
        if (typeof options.dialect !== 'string' && options.dialect !== undefined) throw new TypeError('Dialect must be a string');
        if (typeof options.logging !== 'function' || typeof options.logging !== 'boolean' && options.logging !== undefined) throw new TypeError('Logging must be a function or boolean');
        
    }
}
module.exports = Client;