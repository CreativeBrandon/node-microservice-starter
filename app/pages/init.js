function initHomePage(app){
    app.get('/', renderHomePage);
}

function renderHomePage(req, res, next){
    res.render('pages/homePage');
}

module.exports = initHomePage;
