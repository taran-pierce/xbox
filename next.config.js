const withSass = require('@zeit/next-sass')

module.exports = withSass({
  sourceMap: true,
  env: {
    // access API variable set from build on Heroku
    // needed for app to reference while building
    // for local dev just enter API KEY here
    API: process.env.API,
  },
})