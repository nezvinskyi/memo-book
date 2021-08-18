const router = require('express').Router();
const { users: ctrl } = require('../controllers');

router.post('/', ctrl.registerUser);
router.post('/login', ctrl.authUser);

module.exports = router;
