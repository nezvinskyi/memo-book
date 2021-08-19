const router = require('express').Router();
const { users: ctrl } = require('../controllers');
const protect = require('../middlewares/authMiddleware');

router.post('/', ctrl.registerUser);
router.post('/login', ctrl.authUser);
router.post('/profile', protect, ctrl.updateUserProfile);
router.get('/all', ctrl.getUsers);

module.exports = router;
