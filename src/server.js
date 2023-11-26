const Hapi = require('@hapi/hapi')
const Firestore = require('@google-cloud/firestore')
const routes = require('./routes');

const db = new Firestore({
    projectId: 'quiet-light-397402',
    keyFilename: '../service-account.json'
})

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
    })

    server.route(routes);

    await server.start()
    console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init()