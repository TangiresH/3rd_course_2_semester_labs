const express = require('express');
const router = express.Router();
const Car = require("../schemas/car");

// GET /car
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.send({ cars });
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).send({ error: 'Error fetching cars' });
    }
});

// GET /car/:id
router.get('/:id', async (req, res) => {
    const carId = req.params.id;
    try {
        const car = await Car.findById(carId);
        if (!car) {
            return res.status(404).send({ error: 'Car not found' });
        }
        res.send({ car });
    } catch (error) {
        console.error('Error fetching car:', error);
        res.status(500).send({ error: 'Error fetching car' });
    }
});

// POST /car
router.post('/', async (req, res) => {
    try {
        const car = new Car(req.body);
        await car.save();
        res.status(201).send({ car });
    } catch (error) {
        console.error('Error creating car:', error);
        res.status(500).send({ error: 'Error creating car' });
    }
});

// PATCH /car/:id
router.patch('/:id', async (req, res) => {
    const carId = req.params.id;
    try {
        const car = await Car.findByIdAndUpdate(carId, req.body, { new: true });
        if (!car) {
            return res.status(404).send({ error: 'Car not found' });
        }
        res.send({ car });
    } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).send({ error: 'Error updating car' });
    }
});

// DELETE /car/:id
router.delete('/:id', async (req, res) => {
    const carId = req.params.id;
    try {
        const car = await Car.findByIdAndDelete(carId);
        if (!car) {
            return res.status(404).send({ error: 'Car not found' });
        }
        res.send({ car });
    } catch (error) {
        console.error('Error deleting car:', error);
        res.status(500).send({ error: 'Error deleting car' });
    }
});

module.exports = router;
