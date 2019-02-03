// Add custom data to the GraphQL data layer.
// Changes here requires a server restart.
//
// @see https://gridsome.org/docs/server-api

module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })
}
