// app/routes.js
var pool = require('./mysql')

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

            var query = req.query.q.trim();
            var query = query.toLowerCase();
            var query = query.replace(/\*/g,".+");
            var query = query.replace(/_/g,".{1,2}");
            var query = query.replace(/ch/g,"ʃ");
            var query = query.replace(/gn/g,"ɲ");
            var query = query.replace(/qu/g,"k");
            var query = query.replace(/ph/g,"f");
            var query = query.replace(/ll/g,"l");
            var query = query.replace(/tt/g,"t");
            var query = query.replace(/nn/g,"n");
            var query = query.replace(/mm/g,"m");
            var query = query.replace(/pp/g,"p");
            var query = query.replace(/ff/g,"f");
            var query = query.replace(/ou/g,"u");
            var query = query.replace(/oi/g,"wa");
            var query = query.replace(/ai/g,"(ɛː|ɛ|ai)");
            var query = query.replace(/an/g,"(ɑ̃|an)");
            var query = query.replace(/en/g,"(ɑ̃|en)");
            var query = query.replace(/in/g,"(ɛ̃|œ̃|in)");
            var query = query.replace(/un/g,"(ɛ̃|œ̃|un)");
            var query = query.replace(/on/g,"(ɔ̃|on)");
            var query = query.replace(/x/g,"(ks|gz)");
            var query = query.replace(/s/g,"(s|z)");
            var query = query.replace(/c/g,"(s|k)");
            var query = query.replace(/r/g,"ʁ");
            var query = query.replace(/j/g,"ʒ");
            var query = query.replace(/i/g,"(i|j)");
            var query = query.replace(/g/g,"(g|ʒ)");
            var query = query.replace(/y/g,"(y|j)");
            var query = query.replace(/u/g,"(u|y|ɥ)");

            var query = query.replace(/è/g,"(ɛː|ɛ)");
            var query = query.replace(/e/g,"(œ|ø|ə|ɛː|ɛ|e)");
            var query = query.replace(/é/g,"e");
            var query = query.replace(/o/g,"(o|ɔ)");
            var query = query.replace(/a/g,"(a|ɑ)");

            var query = '^' + query + '$';
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