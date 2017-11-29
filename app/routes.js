// app/routes.js
var pool = require('./mysql')
var phon2regex = require('./phonetics')

module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.render('index.ejs',{data:0}); // load the index.ejs file

    });



    app.get('/search', function(req, res) {


       /* var query = req.body.query;

        pool.query('select * from phonetics where phon like "' + query + '"', function(err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
*/
        pool.getConnection(function(err,connection){
            if (err) {
                res.json({"code" : 100, "status" : "Error in connection database"});
                return;
            }

            console.log('connected as id ' + connection.threadId);

            query = phon2regex(req.query.q)
            var query = pool.escape(query);


            var simple = 'select * from french where phon REGEXP ' + query;
            var exp1 = '(select french.word,french.phon,french.trans,english.def from french inner join english on french.trans = english.word where french.phon REGEXP ' + query + ' limit 30)';
            var exp2 = '(select french.word,french.phon,french.trans,french.def from french where french.trans="" and french.phon REGEXP ' + query + ' limit 10)';
            var complex = exp1 + " union " + exp2;
            console.log('query is : ',query);
            connection.query(simple,function(err,rows){

                //PROTECT AGAINST INJECTION !!!
                connection.release();
                if(!err) {
                    if(rows.length>0) {
                        res.render('index', {data: rows});
                    } else {
                        res.render('index', {data: "no"});
                    }
                }
            });

            connection.on('error', function(err) {
                console.log({"code" : 100, "status" : "Error in connection database"});
                return;
            });
        });
    });
};