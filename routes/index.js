const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/plants', controllers.createPlant)

router.get('/plants/all', controllers.getAllPlants)

router.get('/plants/:id', controllers.getPlantById)

router.put('/plants/:id', controllers.updatePlant)

router.delete('/plants/:id', controllers.deletePlant)

module.exports = router;