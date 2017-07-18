// Middleware Module
function middleware(app){
    require('./cors').init(app)
}

module.exports = middleware;
