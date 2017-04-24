# Up n' running Gulp Boilerplate

## Welcome

Hello! If you are a **front-end developer** looking to get your project started in a matter of minutes, take a look ahead.

As the name suggests, this boilerplate requires minimum to no additional configuration and features all the essentials you will ever need for a simple project: **SASS**, **bourbon/neat** (the light-weight alternative to Compass), **JS-hint**, **plumber**, **sourcemaps**, **browser-sync** and more.

* [Installing](#installing)
* [Browser-Sync](#browser-sync)
* [Structure](#structure)
  * [Packages](#packages)
  * [Folder structure](#folder-structure)
* [FAQ](#faq)
* [Problems](#problems)
* [License](#license)

## Installing
```
1. Clone the repo
        git clone https://github.com/rznn/up-n-running-gulp-boilerplate.git
2. Install dependencies
        npm install
3.Start gulp
        gulp
4. Your preferred browser will be opened automatically and directed to the browser-sync proxy address
5. For production, run
        gulp --production
???. Have fun!
```

## Browser-Sync
To start a local server, simply fire up a terminal in your local project's folder and run "gulp". The server's default address is http://localhost:3000/.

For debugging via Browser-Sync, go to http://localhost:3001/.

## Structure

### Packages
* Gulp
  * [gulp](https://github.com/gulpjs/gulp)
* CSS/SASS
  * [sass](https://github.com/sass/sass)
  * [autoprefixer](https://github.com/postcss/autoprefixer)
  * [minify-css](https://github.com/murphydanger/gulp-minify-css)
* Javascript
  * [jsHint](https://github.com/jshint/jshint)
  * [uglify](https://github.com/mishoo/UglifyJS)
* Images
  * [imagemin](https://github.com/imagemin/imagemin)
* MISC
  * [if](https://github.com/robrich/gulp-if)
  * [notify](https://github.com/mikaelbr/gulp-notify)
  * [plumber](https://github.com/floatdrop/gulp-plumber)
  * [rename](https://github.com/hparra/gulp-rename)
  * [size](https://github.com/sindresorhus/gulp-size)
  * [sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
  * [util](https://github.com/gulpjs/gulp-util)
  * [yargs](https://github.com/bcoe/yargs)

### Folder Structure
---

  ```
  |++ public
      |++ assets
          |++ css
              |-- style.css
          |++ images
          |++ js
              |-- scripts.js
          |-- index.html
  |++ source
      |++ assets
          |++ css
          |++ images
          |++ js
              |++ lib
              |++ vendor
              |-- main.js
          |++ sass
              |++ base
              |++ helpers
              |++ layout
              |++ lib
              |++ modules
              |-- style.scss
      |-- index.html
  |-- gulpfile.js
  |-- LICENSE.txt
  |-- package.json
  |-- README.md
  ```
## FAQ
1. **Why Gulp and not Grunt?** - Simple. Because it's faster, way faster. Compilling and launching a browser reload/inject in Grunt ends up taking even 8s in a big project, with Gulp you'll probably end up with a max of 200ms. That, and a personal preference for the more intuitive way in which you configure Gulp.

## Problems
If you run into any issues whatsoever, do let me know.

This is my first github contribution made as a *HUGE* **thanks to the community**. I expect some things to not be perfect.
  
## License
This boilerplate is licensed under MIT. For more details, please see LICENSE.txt.
