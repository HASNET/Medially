//import HospitalMasterModel from '../../config/sequelize';


var router=require('express').Router();

router.get('/registerHospital', (req, res) => {
   res.status(200).send('Hello Registered Hospital!');
});

module.exports = router;
