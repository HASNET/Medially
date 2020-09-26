var router=require('express').Router();


router.use('/hospitalMaster',require('./hospitalMaster'));
router.use('/bedTypeCount',require('./bedTypeCount'));
router.use('/bedMaster',require('./bedMaster'));
router.use('/itemMaster',require('./itemMaster'));
router.use('/medicineMaster',require('./medicineMaster'));
router.use('/labMaster',require('./labMaster'));
router.use('/docMaster',require('./docMaster'));


module.exports = router;
