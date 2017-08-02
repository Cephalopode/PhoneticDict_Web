var express = require('express');

var mysql      = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '167',
    database : 'dict',
    debug : false
});

/*pool.connect(function(err) {
    if (err) throw err;
});*/

module.exports = pool;