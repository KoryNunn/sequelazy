var customulize = require('customulize'),
    createLazyFunction = require('./createLazyFunction');

module.exports = customulize('lazy', createLazyFunction);