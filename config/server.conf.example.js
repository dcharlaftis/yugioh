var db = require('./config.json');
var ld = require('lodash');

var config = {};

// default config for running within vagrant
// exceptions for running in different evironments are set at the end
config.dev = {
  //environment
  env: 'dev',

  //mongo settings
  mongoConnParamaters: {
    connectionString: 'mongodb://localhost:27017/example'
  },
  mongoConnLogging: true,

  //MySQL settings
  mySqlConnParameters: {
    host: db.development.host,
    port: db.development.port,
    user: db.development.username,
    password: db.development.password,
    database: db.development.database
  },
  SQLlogging: true,

  //logging  options are: all, warn, info, error, log. example: {error:true, log:false }
  loglevel: {
    all: true
  },

  //web server settigns
  serverPort: process.env.port || 1337,
  useWebHttps: false,
  serverHost: 'localhost',
  server: 'http://localhost:1337/',

  //cors settigns
  validDomains: '*',

  //polyphemus settings
  applicationName: 'skeleton',
  polyphemusPort: 4451,
  polyphemusHost: 'echidna.dotbydot.eu',
  polyphemusActive: true,
  polyphemusHttps: true,
  useCAS: true,
  CASService: 'http://echidna.dotbydot.eu:4454/cas',

  // keymetrics pmx
  pmxActive: false,

  // other settings
  other: {}
};

// config when running in build mode
config.build = ld.cloneDeep(config.dev);
config.build.env = 'build';
config.build.mongoConnParamaters.connectionString = 'mongodb://localhost:27017/example';
config.build.mySqlConnParameters.port = db.build.port;
config.build.mySqlConnParameters.username = db.build.username;
config.build.mySqlConnParameters.password = db.build.password;
config.build.mySqlConnParameters.database = db.build.database;
config.build.mySqlConnParameters.host = db.build.host;
config.build.serverPort = process.env.PORT || 1337;

// configuration for pandora ci
config.test = ld.cloneDeep(config.dev);
config.test.env = 'test';
config.test.mongoConnParamaters.connectionString = 'mongodb://localhost:27017/example';
config.test.mySqlConnParameters.port = db.test.port;
config.test.mySqlConnParameters.username = db.test.username;
config.test.mySqlConnParameters.password = db.test.password;
config.test.mySqlConnParameters.database = db.test.database;
config.test.mySqlConnParameters.host = db.test.host;
config.test.serverPort = process.env.PORT || 1337;

// config when running on a production server (NODE_ENV=production)
config.production = ld.cloneDeep(config.dev);
config.production.env = 'production';
config.production.mySqlConnParameters.port = db.production.port;
config.production.mySqlConnParameters.username = db.production.username;
config.production.mySqlConnParameters.password = db.production.password;
config.production.mySqlConnParameters.database = db.production.database;
config.production.mySqlConnParameters.host = db.production.host;
config.production.pmxActive = true;
config.production.SQLlogging = false;
config.production.loglevel = {
  error: true,
  warn: true,
  log: false,
  info: false
};

module.exports = config;
