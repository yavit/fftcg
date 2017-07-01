var Card = require('../models/card');

module.exports.listAll = function(req, res, next){
    Card.find()
        .then(cards => {
            res.render('cards/list', {cards: cards});
        })
        .catch (next);
};

module.exports.list = function(req, res, next) {
    Card.find()
        .then(cards => {
            res.render('cards/list', {cards: cards});
        })
        .catch (next);
};


module.exports.show = function (req, res, next) {
    const id = req.params.id;

    Card.findById(String(id))
        .then(card => {
            if (!card) {
            return next(); // 404
        }

        res.render('cards/show', { card: card });
    })
    .catch(next);
};