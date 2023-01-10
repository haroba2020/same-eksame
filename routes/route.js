const { Router } = require('express');
const Controller = require('../controllers/controller');

router = Router()

router.post('/eier', Controller.signup_post);

module.exports = router