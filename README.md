# Xbox Live API `1.1.0`
A project to interact with the Xbox Live API and see what kind of data you can get back and displaying it.

## Setup
* `git clone https://github.com/taran-pierce/xbox.git`
* `cd xbox`
* `npm install`

## Commands
* `npm run dev`
  ** if port is taken `npm run dev -- -p <PORT>`

## Directory structure should look as follows:
This of course can be modified, but the gulpfile.js will need to be updated as well if you do so that all assets get placed in the location you are expecting.

```
  /xbox
  |
  |-pages
  |  |-index.js
  |
  |-components
  |  |-Header.js
  |  |-js
  | 
  |-utilities
  |  |-apiHeaders.js
```

### Current Features
* Enter Gamer Tag and the search page returns the users:
  * Profile
  * Activity Feed
  * Game Clips

### Upcoming Features
* separate routes for different data from the API
