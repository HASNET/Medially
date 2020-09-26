var router=require('express').Router();

router.use('/',require('./hospital'));
router.use('/registerHospital',require('./registerHospital'));

module.exports = router;
