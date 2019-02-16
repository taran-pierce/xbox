const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next( {dev} )
const handle = app.getRequestHandler()

app.prepare()
  .then( () => {
    const server = express()
    
    server.get('/gamer-search/:gamerTag', (req, res) => {
      const actualPage = '/gamer-search'
      const queryParams = { gamerTag: req.params.gamerTag }
      
      app.render(req, res, actualPage, queryParams)
    })
  
    server.get('/game-clips/:xuid/:gamerTag', (req, res) => {
      const actualPage = '/game-clips'
      const queryParams = {
        xuid: req.params.xuid,
        gamerTag: req.params.gamerTag
      }
    
      app.render(req, res, actualPage, queryParams)
    })
  
    server.get('/activity/:xuid/:gamerTag', (req, res) => {
      const actualPage = '/activity'
      const queryParams = {
        xuid: req.params.xuid,
        gamerTag: req.params.gamerTag
      }
    
      app.render(req, res, actualPage, queryParams)
    })
  
    server.get('/presence/:xuid/:gamerTag', (req, res) => {
      const actualPage = '/presence'
      const queryParams = {
        xuid: req.params.xuid,
        gamerTag: req.params.gamerTag
      }
    
      app.render(req, res, actualPage, queryParams)
    })
    
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    
    server.listen(3000, (err) => {
      if ( err ) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
.catch( (ex) => {
  console.log(ex.stack)
  process.exit(1)
})