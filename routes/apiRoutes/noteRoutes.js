const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/notes', (req,res) => {
    response = notes;
    res.json(response);
});

module.exports = router;