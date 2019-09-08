# Babel Basic Setup

## Usage: ##
* Clone this project
* Run `npm install`

### This repo have the following Babel setup: ###

```javascript
"devDependencies": {
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1"
  }
```  

  ### To compile ES5+ to ES5 run the following command: ###

  `babel src/app.js --out-file=public/scripts/app.js --presets=env,react`

  ### To compile and watch for live changes: ###

  `babel src/app.js --out-file=public/scripts/app.js --presets=env,react —-watch`

  ### It can be used in combination with live-server: ###

  `live-server public`
  
---

If you need a webpack boilerplate configured to use React, then use the following repo:
[webpack-boilerplate](https://github.com/andres-cruz/webpack-boilerplate)
