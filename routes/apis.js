var express = require('express');
var bodyParser = require('body-parser');
var apiCtrl = require('../controllers/apis');
var router = express.Router();

/* Liste globale des cartes */
router.get('/',
    apiCtrl.list
);

/**
 *
 */
router.get('/jobs',
    apiCtrl.getJobs
);

router.get('/costs',
    apiCtrl.getCosts
);

router.get('/categories',
    apiCtrl.getCategories
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

module.exports = router;
