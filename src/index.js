var ID = '_id'
var modifiedID = false

var create = (array, init) => {
  init = init || {}

  if (Array.isArray(array)) {
    return array.reduce((obj, item) => {
      var id = ID
      if (!modifiedID) {
        if (!item[id]) {
          id = 'id'
        }
      }

      obj[item[id]] = item
      return obj
    }, init)
  }

  return null
}

create.setID = (id) => {
  modifiedID = true
  ID = id
  return create
}

module.exports = create
