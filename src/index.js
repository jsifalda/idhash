var isPlainObject = require('is-plain-object')

var ID = '_id'
var modifiedID = false

var create = (array, id) => {
  if (id) {
    modifiedID = true
  }

  id = id || ID

  if (Array.isArray(array)) {
    return array
    .filter((item) => {
      return isPlainObject(item)
    })
    .reduce((obj, item) => {
      if (!modifiedID) {
        if (!item[id]) {
          id = 'id'
        }
      }

      obj[item[id]] = item
      return obj
    }, {})
  }

  return null
}

module.exports = create
