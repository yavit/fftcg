var express = require('express');
var bodyParser = require('body-parser');
var cardCtrl = require('../controllers/cards');
var router = express.Router();

/* Liste des contacts */
router.get('/',
    cardCtrl.list
);

/* Ajouter un contact (affichage du form) *
router.get('/add',
    contactCtrl.addForm
);

/* Ajouter un contact *
router.post('/add',
    bodyParser.urlencoded({extended: false}),
    contactCtrl.add
);

/* Détails d'un contact */
router.get('/:id',
    cardCtrl.show
);

/* Suppression d'un contact (affichage du form) *
router.get('/:id/delete',
    contactCtrl.deleteConfirm
);

/* Suppression d'un contact *
router.post('/:id/delete',
    bodyParser.urlencoded({extended: false}),
    contactCtrl.delete
);

*/
module.exports = router;
