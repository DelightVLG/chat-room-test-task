const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('<p>Server is up and running</p>');
});

module.exports = router;
