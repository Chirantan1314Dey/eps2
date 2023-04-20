const mysql = require('mysql');

var con = mysql.createConnection({
    host:"sql309.epizy.com",
    user:"epiz_34047971",
    password:"xbyXYE4bhbjnS",
    database:"epiz_34047971_collage"
  });

  module.exports = con;
