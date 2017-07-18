const cors = require('cors')
const config = require('../../config')

let corsOptions = {
    optionsSuccessStatus: 200,
    origin: (origin, callback) => {
        if (config.cors.whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(null, false)
        }
    }
}

function corsMiddleware(app) {
    app.use(cors(corsOptions))
}

module.exports = {
    init: corsMiddleware
}
