#sequelazy

Adds lazy execution of queries to sequelize via [customulize](https://www.npmjs.org/package/customulize)

##Installation

    npm install sequelazy

##usage

    var sequelazy = require('sequelazy'),

    // define your sequelize models
    var models = {
        Account: require('./account')
    };

    // call function over them
    sequelazy(models);

    // now you can execute queries lazily
    var executeQuery = models.Account.lazy.find({ where: { id: 1} });

    // later...
    executeQuery(function(error, account) {
        if (error) {
            // error logic
        }
        account.name = 'John';
        account.cps.save(function(error, account) {

        });
    });

##kgo
When using [kgo](https://www.npmjs.org/package/kgo) this is especially convenient.

    kgo
    ('account', Account.lazy.find(null, {where: {id: 1}}))
    ('update', ['account'], function(account, done) {
        account.name = 'John';
        account.cps.save(done);
    })
    // etc, etc, etc

Pull requests welcome with passing tests.