const withSass = require('@zeit/next-sass')

module.exports = withSass({
  sourceMap: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
})