const isPlainObject = require('is-plain-object')
const curry = require('ramda/src/curry')

const idhash = (id, array) => {
  if (Array.isArray(array)) {
    return array
      .filter((item) => {
        return isPlainObject(item)
      })
      .reduce((obj, item) => {
        obj[item[id]] = item
        return obj
      }, {})
  }

  return null
}

module.exports = curry(idhash)
