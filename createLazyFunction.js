function createLazyFunction(model, method) {
    return function() {
        var args = arguments;

        return function(callback){
            var query = model[method].apply(model, args);
            return query.complete(callback);
        };
    };
}
module.exports = createLazyFunction;