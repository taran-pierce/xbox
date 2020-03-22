# Xbox Live API `2.1.1`
A project to interact with the Xbox Live API and see what kind of data you can get back and displaying it.

## Setup
* `git clone https://github.com/taran-pierce/xbox.git`
* `cd xbox`
* `npm install`
* Update `next.config.js` with your `API` key
  * https://xboxapi.com/ - works with a free account

## Commands
* `npm run dev`
  * if port is taken `npm run dev -- -p <PORT>`

## Directory structure:
```
  /xbox
  |
  |-pages
  |  |-index.js
  |
  |-components
  |  |-Header
  |  |   |-index.js
  |  |   |-header.scss
  |  |
  |  |-Footer
  |
  |-utilities
  |  |-apiHeaders.js
  |
  |-static
  |  |-img
  |
```
### Pushes to master update Heroku: https://xbox-live.herokuapp.com/