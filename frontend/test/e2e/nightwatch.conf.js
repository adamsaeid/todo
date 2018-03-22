const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;

if (TRAVIS_JOB_NUMBER) {
  module.exports = require('./nightwatch.conf.travis')
} else {
  module.exports = require('./nihtwatch.conf.local')
}
