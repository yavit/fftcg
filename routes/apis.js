var express = require('express');
var bodyParser = require('body-parser');
var apiCtrl = require('../controllers/apis');
var router = express.Router();

/* Liste des contacts */
router.get('/',
    apiCtrl.list
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
 */

router.get('/jobs',
    apiCtrl.getJobs
);

router.get('/costs',
    apiCtrl.getCosts
);

/*Détails d'un contact */
 router.get('/:id',
    apiCtrl.show
 );

 /*Query sur les cartes*/
 router.post('/',
    bodyParser.urlencoded({extended: false}),
     apiCtrl.query
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
