
var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();


// Creates a JSON client
/** Para fazer a comunicação com o servidor da API do back-end */
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});




/* GET users listing. */
/** Listando os usuarios que estão no banco de dados no back-end */
router.get('/', function (req, res, next) {

  client.get('/users', function (err, request, response, obj) {
    assert.ifError(err);

    res.send(JSON.stringify(obj, null, 2));
  });

});


module.exports = router;
