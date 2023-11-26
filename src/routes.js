
const routes = [
    {
        method: 'POST',
        path: '/users',
        handler: require('./handler.js')
    }
]

module.exports = routes;