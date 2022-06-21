const router = require('express').Router();
const { notes } = require('../../db/db');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req,res) => {
    response = notes;
    res.json(response);
});

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;