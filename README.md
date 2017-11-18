# jump-start
The purpose of jump-start is to get you quickly only your way developing your website. It utilizes npm to handle it's dependencies so it's easy to get up and running with what is already set up.

## Setup
First thing you will need to do is install all of the dependencies to get your project started. Everything is saved to the package.json so a `npm install` will get everything you need installed properly.

### Gulp Commands
jump-start leverages gulp and the gulpfile.js is configured with a default setting that will run the following chain of commands so you can get your project started. There is also a commented out example of how a gulp task is set up so that you can see the different parts of a gulp task.

This will help you create or modify any of the tasks you see already in this file.

1. build - compiles the projects HTML files (takes advantage of useref to concat files and moves those files over into the `dist` directory in their proper location.
2. sass - Copmiles and minifies the scss into css and moves it to the proper location.
3. browserSync - Who has time to reload the page? Not this guy! Browser window will automatically reload on modifications to any .html, .js or .scss files.
4. watch - gulp will then watch all directories and run any compiling it needs to and reload the browser window for you.

## Directory structure should look as follows:
This of course can be modified, but the gulpfile.js will need to be updated as well if you do so that all assets get placed in the location you are expecting.

```
  /project
  |
  |-app
  |  |-scss
  |  |-js
  |  |-css
  |  |-images
  |  |-fonts
  |
  |-dist
  |  |-css
  |  |-js
  |  |-fonts
  |  |-images
```

## Gulp Commands
1. gulp - This will build the project, turn on browserSync and set up watcher so any edits you make will trigger the proper recomipling and window reloading.
2. sass - This will compile the scss into css and also uses `cssnano` to minify the css after it's been compiled.
3. useref - Uses HTML comments in `.html` files in order to combine JS or CSS files into one file. Uses gulpIf to check to see if it's a `.js` file and will uglify the JS in addition to combining them. It will use `cssnano` to minify the CSS.
4. images - This will optimize the images by compressing them and move them into the `dist` directory.
5. fonts - This will move any fonts from `app/fonts` to `dist/fonts` just to keep things orgainzed.
6. browserSync - starts a server for your project and has built in functions to reload the page for you.
7. clean:dist - Uses `del` to clean up and remove any files from `dist` so the project can start with a clean directory to build it's files.
8. build - Runs `clean:dist` then `sass` > `useref` > `images` > `fonts`
9. default - (it's default, so you can run this by using just `gulp` in the terminal. This will run `build` > `sass` > `browserSync` > `watch` 
