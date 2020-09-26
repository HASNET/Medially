//import HospitalMasterModel from './../../config/sequelize';

//home/rohan/Downloads/rohan/src/routes/hospital/registerHospital.js
//home/rohan/Downloads/rohan/src/config/sequelize.js
///home/rohan/Downloads/rohan/src/models/hospital.js
///home/rohan/Downloads/rohan/src/config/sequelize.js
var router=require('express').Router();
//var HospitalMaster = require('../../models/hospital');
var sequelize=require('../../config/sequelize');
var Sequelize =require('sequelize');
var HospitalMasterModel = require('../../models/hospital');
//var router=require('./index.js')
//var cors = require('cors');
/*
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
/*
router.get('/register', (req, res) => {
 //  res.status(200).send('Hello Registered Hospital!');
 HospitalMaster.create({
        hospital_id: 1212,
        hospital_name:  "TESTT",
        hospital_address:  "TESTT",
        hospital_contact:   "TESTT",
        hospital_email: "TESTT",
        hospital_speciality:    "TESTT",
        hospital_active:   true,
        record_created_by:  "TESTT",
        record_created_date:    new Date(2020,5,8),
        record_modified_by: "TESTT",
        record_modified_date: new Date(2020,5,8)
     
 })
.then(()=>{
    console.log('Users db and user table been created')
    }); 
    
});

*/
const HospitalMaster = HospitalMasterModel(sequelize,Sequelize);

/*
HospitalMaster.sync()
.then(()=>{
   return HospitalMaster.create({
       hospital_id: 10001
   });
});
*/
/*
router.get('/resgister', (req, res) => {
// res.status(200).send('Hello Registered Hospital!');
 
HospitalMaster.sync()
.then(()=>{
   return HospitalMaster.create({
       hospital_id: 10001
   });
});    
});

*/

router.get('/getAllHospitalInfo', (req, res) => {
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
/*
const {QueryTypes} = require('sequelize');
const records =  await sequelize.query('select 1 as `foo.bar.baz`',{
type.QueryTypes.SELECT
});
console.log(JSON.stringify(records[0],null,2))
*/
router.get('/getAllHospitalQuery', (req, res) => {
// res.status(200).send('Hello Registered Hospital!');
 
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




/*
    sequelize.sync()
.then(()=>{
    console.log('Users db and user table been created')
});

*/
module.exports = router;


