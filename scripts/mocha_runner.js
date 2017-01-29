const jsdom = require('jsdom').jsdom 

const exposedProterties = ['window', 'navigator', 'document']

global.document = jsdom('');
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProterties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

documentRef = document 

require('babel-core/register')