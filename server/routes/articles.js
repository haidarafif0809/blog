var express = require('express');
var router = express.Router();
const {create,index,find, update, destroy, myArticle} = require('../controllers/ArticleController');

const { auth } = require('../middleware/auth');

router.post('/',auth,create);
router.get('/',index);
router.get('/me',auth,myArticle);
router.get('/:id',find);
router.put('/:id',auth,update);
router.delete('/:id',auth,destroy);

module.exports = router;
