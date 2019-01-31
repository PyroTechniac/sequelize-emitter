const isObject = o => typeof o === 'object' && o !== null;
/* eslint-disable prefer-const */
class Util {
    constructor() {
        throw new Error(`The ${this.contructor.name} class may not be instantiated`);
    }
    /**
     * Flatten an object. Any properties that are collections will get converted to an array of keys.
     * @param {Object} obj The object to flatten
     * @param  {...Object<string, boolean|string>} [props] Specific properties to include/exclude
     * @returns {Object}
     */
    static flatten(obj, ...props) {
        if (!isObject(obj)) return obj;
        props = Object.assign(...Object.keys(obj).filter(k => !k.startsWith('_')).map(k => ({ [k]: true })), ...props);
        const out = {};
        for (let [prop, newProp] of Object.entries(props)) {
            if (!newProp) continue;
            newProp = newProp === true ? prop : newProp;

            const element = obj[prop];
            const elemIsObj = isObject(element);
            const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.value() : null;
            if (element instanceof require('./Collection')) out[newProp] = Array.from(element.keys());
            else if (Array.isArray(element)) out[newProp] = element.map(e => Util.flatten(e));
            else if (typeof valueOf !== 'object') out[newProp] = valueOf;
            else if (!elemIsObj) out[newProp] = element;
        }
        return out;
    }
    /**
     * Searches an array for a specified value, and a boolean if it exists
     * @param {*} arg - Value to search for
     * @param {Array} arrayToSearch - Array to search through
     */
    static findIn(arg, arrayToSearch) {
        if (!(arrayToSearch instanceof Array)) return false;
        let identifier = false;
        arrayToSearch.forEach(val => {
            if (val === arg) identifier = true;
        });
        return identifier;
    }
}
module.exports = Util;