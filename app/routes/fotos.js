module.exports = function(app){
    app.get('/fotos', function(req, res){
        res.render('fotos')
    })
}