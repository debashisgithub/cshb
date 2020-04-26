const router = require('express').Router();
const Advertiser = require('../controllers/advertiser');

router.get('/adds', new Advertiser().getAdds)
router.get('/adds/list', new Advertiser().getAddsList)
router.post('/adds/save', new Advertiser().saveAddConversions)

module.exports = router;