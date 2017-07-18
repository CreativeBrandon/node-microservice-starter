function initHomePage(app){
    app.get('/', renderHomePage);
}

function renderHomePage(req, res, next){
    res.render(__dirname + '/homepage');
}

module.exports = initHomePage;
