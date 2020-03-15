const withSass = require('@zeit/next-sass')

module.exports = withSass({
  sourceMap: true,
  env: {
    API: process.env.API || 'TARAN',
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
})