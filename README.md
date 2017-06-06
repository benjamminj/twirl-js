# **twirl-js**
### **Create CSS-in-JS Object Literals with Template Strings**

[![Build Status](https://travis-ci.org/benjaminj6/twirl-js.svg?branch=master)](https://travis-ci.org/benjaminj6/twirl-js)
[![codecov](https://codecov.io/gh/benjaminj6/twirl-js/branch/master/graph/badge.svg)](https://codecov.io/gh/benjaminj6/twirl-js)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![](http://img.badgesize.io/benjaminj6/twirl-js/master/src/parse.js.svg?compression=gzip&label=size_(gzip)&color=blue)

## **Usage**

### Install

```javascript
npm install --save twirl-js
```

### Write styles!

```javascript
import twirl from 'twirl-js'

const background = 'papayawhip'
const size = 18

const css = twirl`
  background: ${background}
  font-size: ${size}px
  color: '#000'
`

console.log(css) // { background: 'papayawhip', 'font-size': '18px', color: '#000' }
```

## **Contributing**

Found a bug? Have a feature request or found a way to increase performance? I'd love any input, so feel free to [open an issue](https://github.com/benjaminj6/twirl-js/issues) or [submit a pull request.](https://github.com/benjaminj6/twirl-js/pulls)

For pull requests, all I ask is that you run the tests and format your code first (you can use the `npm test` and `npm run format` to do so). And if you've created a new feature, I just ask that you add tests to cover whatever amazing thing you've added 😎

