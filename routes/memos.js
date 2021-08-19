const router = require('express').Router();
const { memos: ctrl } = require('../controllers/');
const protect = require('../middlewares/authMiddleware');

router.get('/', protect, ctrl.getMemos);

router.post('/add', protect, ctrl.addMemo);
router.get('/:id', protect, ctrl.getMemoById);
router.put('/:id', protect, ctrl.updateMemo);
router.delete('/:id', protect, ctrl.deleteMemo);

module.exports = router;
