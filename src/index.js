var isPlainObject = require('is-plain-object')

var idhash = (array, id = '_id') => {
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

module.exports = idhash
