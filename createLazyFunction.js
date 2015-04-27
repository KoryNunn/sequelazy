function createLazyFunction(model, method) {
    return function() {
        var args = arguments;

        return function(callback){
            var query = model[method].apply(model, args);

            if(query.complete){
                return query.complete(callback);
            }

            query.then(callback.bind(null, null), callback);
        };
    };
}
module.exports = createLazyFunction;