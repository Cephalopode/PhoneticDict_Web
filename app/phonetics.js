// app/phonetics.js

module.exports = function(query) {
            var query = query.trim();
            var query = query.toLowerCase();
            var query = query.replace(/\*/g,".+");
            var query = query.replace(/_/g,".{1,2}");

            var query = query.replace(/s$/,"s*");
            var query = query.replace(/t$/,"t*");
            var query = query.replace(/x$/,"x*");
            var query = query.replace(/e$/,"e*");

            var query = query.replace(/ch/g,"(ʃ|k)");
            var query = query.replace(/sh/g,"ʃ");
            var query = query.replace(/ph/g,"f");
            var query = query.replace(/h/g,"");

            var query = query.replace(/gn/g,"ɲ");
            var query = query.replace(/qu/g,"k");
            var query = query.replace(/ll/g,"l");
            var query = query.replace(/tt/g,"t");
            var query = query.replace(/nn/g,"n");
            var query = query.replace(/mm/g,"m");
            var query = query.replace(/pp/g,"p");
            var query = query.replace(/ff/g,"f");
            var query = query.replace(/ss/g,"s");

            var query = query.replace(/ou/g,"u");
            var query = query.replace(/oi/g,"wa");
            var query = query.replace(/oy/g,"WAJ");//bypass j subs
            var query = query.replace(/ai/g,"(ɛː|ɛ|ai)");
            var query = query.replace(/an/g,"(ɑ̃|an)");
            var query = query.replace(/en/g,"(ɑ̃|en)");
            var query = query.replace(/in/g,"(ɛ̃|œ̃|in)");
            var query = query.replace(/un/g,"(ɛ̃|œ̃|un)");
            var query = query.replace(/on/g,"(ɔ̃|on)");
            var query = query.replace(/am/g,"(ɑ̃|am)");
            var query = query.replace(/em/g,"(ɑ̃|em)");
            var query = query.replace(/im/g,"(ɛ̃|œ̃|im)");
            var query = query.replace(/eau|au/g,"o");
            var query = query.replace(/om/g,"(ɔ̃|om)");
            var query = query.replace(/er/g,"(e|er)");
            var query = query.replace(/eu/g,"(œ|ø|ə)");

            var query = query.replace(/x/g,"(ks|gz)");
            var query = query.replace(/s/g,"(s|z)");
            var query = query.replace(/c/g,"(s|k)");
            var query = query.replace(/r/g,"ʁ");
            var query = query.replace(/j/g,"ʒ");
            var query = query.replace(/i/g,"(i|j)");
            var query = query.replace(/g/g,"(g|ʒ)");
            var query = query.replace(/y/g,"(y|j|i)");
            var query = query.replace(/u/g,"(u|y|ɥ)");

            var query = query.replace(/è/g,"(œ|ø|ə|ɛː|ɛ|e)");
            var query = query.replace(/e/g,"(œ|ø|ə|ɛː|ɛ|e)");
            var query = query.replace(/é/g,"(œ|ø|ə|ɛː|ɛ|e)");
            var query = query.replace(/ê/g,"(œ|ø|ə|ɛː|ɛ|e)");
            var query = query.replace(/o/g,"(o|ɔ)");
            var query = query.replace(/a/g,"(a|ɑ)");

            var query = query.replace(/WAJ/g,"waj");//bypass j subs


            var query = '^' + query + '$';
            return query

}
