const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET /person: List all people
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.json(people);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /person: Add a new person
router.post('/', async (req, res) => {
    try {
        const { name, age, gender, mobile } = req.body;
        const newPerson = new Person({ name, age, gender, mobile });
        await newPerson.save();
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT /person/:id: Update a person by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, mobile } = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(
            id,
            { name, age, gender, mobile },
            { new: true }
        );
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.json(updatedPerson);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE /person/:id: Delete a person by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPerson = await Person.findByIdAndDelete(id);
        if (!deletedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
