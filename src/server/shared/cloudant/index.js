'use strict';

const config = require('../config');

const credentials = config.VCAP_SERVICES['cloudantNoSQLDB Dedicated'][0].credentials;
const cloudant = require('nano')(credentials.url);

const dBase = (dbName) => {
  return new Promise((resolve, reject) => {
    cloudant.db.list((err, body) => {
      if (err) {
        reject(err);
      } else {
        let isfoundDb = false;
        // try to find db name in database list
        body.forEach((element) => {
          if (element === dbName) {
            const foundDb = cloudant.db.use(dbName);
            isfoundDb = true;
            return resolve(foundDb);
          }
        }, this);
        if (isfoundDb === false) {
          console.log(`DB ${dbName} not found. Creating new db...`);
          // create new database
          cloudant.db.create(dbName, (error) => {
            if (error) {
              reject(`cloudant - getDb() creating db ${dbName} failed`);
            } else {
              cloudant.db.use(dbName).insert({ crazy: true }, 'initialData', (error2) => {
                if (error2) {
                  console.log(`Cloudant initialData creation error ${error2}`);
                }
                console.log('Cloudant initialData creation successful.');
              });
              resolve(cloudant.db.use(dbName));
            }
          });
        }
      }
    });
  });
};

module.exports = {
  dBase,
};
