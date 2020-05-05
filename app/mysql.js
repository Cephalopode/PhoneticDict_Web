var express = require("express");

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 100,
  host: "db",
  user: "root",
  password: "GLAEbjpCB2EHsaGA",
  database: "dict",
  debug: false,
});

/*pool.connect(function(err) {
    if (err) throw err;
});*/

module.exports = pool;
