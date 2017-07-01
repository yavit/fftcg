var Card = require('../models/card');

module.exports.list = function(req, res, next){
    Card.find()
        .then(cards => {
        res.json(cards);
})
    .catch (next);
};

module.exports.show = function(req, res, next){
    const id = req.params.id;

    Card.findById(id)
        .then(card => {
            if (!card) {
                return next(); // 404
            }

            res.json(card);
        })
        .catch(next);
};

module.exports.query = function(req, res, next){
    let wildcard = new RegExp(".*");
    let qtype = req.body.type || wildcard;
    let qjob = req.body.job || wildcard;
    let qtitle = req.body.title || wildcard;
    let qcost = req.body.cost || wildcard;
    let qcategory = req.body.category || wildcard;
    let qelement = req.body.element || wildcard;
    let qcapacity = [];
    if(req.body.capacity){
        qcapacity = req.body.capacity.split(',');
        console.log(qcapacity);
    }

    let qserial = "";
    if(req.body.serial){
        qserial = req.body.serial;
    }
    else{
        if(req.body.opus){
            qserial+=req.body.opus;
        }
        else{
            qserial+="."
        }
        qserial+="-.{3}";
        if(req.body.rarity){
            qserial+=req.body.rarity.toUpperCase();
        }
        else {
            qserial += ".";
        }
    }
    qserial= new RegExp(qserial);

    console.log(qserial);
    Card.find({'type':qtype, 'job':qjob, 'title':qtitle, 'cost':qcost, 'serial':qserial})
    .then(card => {
        if (!card) {
            return next(); // 404
        }
        else{
            qcapacity.forEach(cap => {
                try{
                    var r = new RegExp(cap.toString(), 'i');
                    card = card.filter(e => {
                        return e.actions.search(r) === -1 ? false : true;
                    });
                }
                catch(e){
                    res.statusCode = 409;
                    res.statusMessage = 'Bad Request in capacity: "'+cap+'" ';
                    //console.log(e);
                    card = {};
                }
            });

        }
        res.json(card);
    })
    .catch(next);
};

module.exports.getJobs = function(req, res, next){
    let jobs = [];
    Card.find()
    .then(card => {
        card.forEach(c =>{
            if(!jobs.includes(c.job)){
                jobs.push(c.job);
            }
        });
        jobs = jobs.filter(e => {
            return e !== "" ? true : false;
        });
        jobs.sort();
        res.json({"jobs":jobs});
    })
    .catch(next);
};

module.exports.getCosts = function(req, res, next){
    let costs = [];
    Card.find()
    .then(card => {
        card.forEach(c =>{
            if(!costs.includes(c.cost)){
                costs.push(c.cost);
            }
        });
        costs = costs.filter(e => {
            return e !== "" ? true : false;
        });
        costs = costs.sort();
    res.json({"costs":costs});
    })
    .catch(next);
};