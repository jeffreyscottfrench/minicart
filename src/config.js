'use strict';


var mixin = require('./util/mixin');


var defaults = module.exports = {

    name: 'PPMiniCart',

    parent: (typeof document !== 'undefined') ? document.body : null,

    action: 'https://www.paypal.com/cgi-bin/webscr',

    target: '',

    duration: 30,

    template: '$TEMPLATE$',

    styles: '$STYLES$',

    confirm: 'cart',

    strings: {
        button: 'Check Out via <img src="/images/af_paypal_logo.png" width="65" height="18" alt="PayPal" />',
        subtotal: 'Subtotal:',
        discount: 'Discount:',
        empty: 'Your cart is empty'
    }

};


/**
 * Mixes in the user config with the default config.
 *
 * @param {object} userConfig Configuration overrides
 * @return {object}
 */
module.exports.load = function load(userConfig) {
    return mixin(defaults, userConfig);
};
