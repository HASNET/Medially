var router=require('express').Router();
//var HospitalMaster = require('../../models/hospital');
var sequelize=require('../../config/sequelize');
var Sequelize =require('sequelize');
//var HospitalMasterModel = require('../../models/hospitalMaster');

//controllers/hospital-master.controller.js
//const hospital-master= require('');
//const HospitalMaster = HospitalMasterModel(sequelize,Sequelize);

/*
//router.get('/getAllHospitalInfo', (req, res) => {
// res.status(200).send('Hello Registered Hospital!');
 
HospitalMaster.findAll({
 //   attributes:['hospital_id']
}).then( (resultSet)=>{
 //console.log('Users db and user table been created');
  //console.log('Fetched Result :: ',res.data);
 //       res.status(200).send('Hello Got all Registered Hospital!');
 
 res.status(200).send(resultSet);
     
 });
});
*
const {QueryTypes} = require('sequelize');
const records= sequelize.query('select * from Hospital_Master',{
//logging:console.log,
//plain:false,
raw:true,
type: QueryTypes.SELECT
}).then(function(records){
    console.log(records);
    res.status(200).send(records);
});
//console.log(JSON.stringify(records.data));
 //res.status(200).send("records got");
     
 });

*/
module.exports = router;


