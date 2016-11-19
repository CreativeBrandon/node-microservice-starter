
function initMigrationsPage(app){
    app.get('/migrations', renderMigrationsPage);
}

function renderMigrationsPage(req, res, next){
    res.render('migrations/migrations');
}

module.exports = initMigrationsPage;
