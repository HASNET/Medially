var router=require('express').Router();
var common=require('../../config/common');
var sequelize=require('../../config/sequelize');
var Sequelize =require('sequelize');
var HospitalMasterModel = require('../../models/hospitalMaster');
var HospitalMaster = HospitalMasterModel(sequelize,Sequelize);


   router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
    });

/*
    router.get('/', common.verifyToken,(req, res) => 
        HospitalMaster.findAll().then( (resultSet)=> res.status(200).send(resultSet) ) 
    );

*/
      router.get('/', (req, res) => 
        HospitalMaster.findAll().then( (resultSet)=> res.status(200).send(resultSet) ) 
    );


    router.post('/',common.verifyToken,(req, res) => {
      HospitalMaster.create({
            hospital_id: req.body.hospital_id,
            hospital_name:  req.body.hospital_name,
            hospital_address:   req.body.hospital_address,
            hospital_contact:   req.body.hospital_contact,
            hospital_email:         req.body.hospital_email,
            hospital_speciality:    req.body.hospital_speciality,
            hospital_active:        req.body.hospital_active,
            record_created_by:      req.body.record_created_by,
            record_created_date:    req.body.record_created_date,
            record_modified_by:     req.body.record_modified_by,
            record_modified_date:   req.body.record_modified_date
        })
        .then( (data)=>{
            res.status(200);
            res.json(data.get({plain:true}));    
            })
            .catch((error)=>{
                res.status(500);
                res.json({error:error,stackError:error.stack});
            });
});
module.exports = router;


