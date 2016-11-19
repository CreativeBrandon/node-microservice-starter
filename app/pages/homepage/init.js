function initHomePage(app){
    app.get('/', renderHomePage);
}

function renderHomePage(req, res, next){
    res.render('pages/homepage/homepage');
}

module.exports = initHomePage;
