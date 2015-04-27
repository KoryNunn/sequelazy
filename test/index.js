var test = require('grape'),
    propertyName = 'lazy',
    createLazyFunction = require('../createLazyFunction'),
    runTests = require('customulize/test/runTests');

function successTestLazy(t, model, method) {
    model[propertyName][method](null, true)(function(error, result) {
        t.equal(result, true, method + ' success ok');
    });
}

function errorTestLazy(t, model, method) {
    model[propertyName][method]('bad')(function(error) {
        t.equal(error, 'bad', method + ' error ok');
    });
}

function createLazyFunction(model, method) {
    return function() {
        var query = model[method].apply(model, arguments);
        return query.complete.bind(query);
    };
}

runTests.sequelizeV1(test, propertyName, createLazyFunction, successTestLazy, errorTestLazy);
runTests.sequelizeV2(test, propertyName, createLazyFunction, successTestLazy, errorTestLazy);