var router=require('express').Router();

router.get('/hospital', (req, res) => {
   res.status(200).send('hello world Hospital!');
});

module.exports = router;
