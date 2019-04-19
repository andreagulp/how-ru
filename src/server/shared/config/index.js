'use strict';

const cfEnv = require('cfenv');
const localJson = require('./local.json');

let VCAP_SERVICES;

if (process.env.VCAP_SERVICES) {
  VCAP_SERVICES = cfEnv.getAppEnv().services;
} else {
  console.log('No VCAP_SERVICES environment variable, reading from file');
  VCAP_SERVICES = localJson.VCAP_SERVICES;
}

module.exports = {
  VCAP_SERVICES,
};
