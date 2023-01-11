const { Router } = require('express');
const Controller = require('../controllers/controller');

router = Router()

router.get('/database',Controller.database_get)
router.get('/index',Controller.index_get)
router.get('/map',Controller.map_get)

router.post('/owner', Controller.owner_post);
router.post('/rein', Controller.rein_post);
router.post('/flock', Controller.flock_post);
router.post('/database', Controller.database_post)
router.post('/filter', Controller.database_filter)


module.exports = router