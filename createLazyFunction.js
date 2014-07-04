function createLazyFunction(model, method) {
    return function() {
        var query = model[method].apply(model, arguments);

        return function(){
            return query.complete.apply(query, arguments);
        };
    };
}
module.exports = createLazyFunction;