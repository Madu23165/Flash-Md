





function _0x3de5(_0x1fc492,_0x1b8adf){const _0x5efd68=_0x5efd();return _0x3de5=function(_0x3de5c6,_0x56f02e){_0x3de5c6=_0x3de5c6-0x76;let _0x34f597=_0x5efd68[_0x3de5c6];return _0x34f597;},_0x3de5(_0x1fc492,_0x1b8adf);}const _0x347309=_0x3de5;function _0x5efd(){const _0x5cc528=['547912xqxfVT','rows','10lNRQjQ','connect','8OkJIeu','873836teZFUF','SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20banGroup\x20WHERE\x20groupeJid\x20=\x20$1)','../set','1762070ZbAdUF','config','INSERT\x20INTO\x20banGroup\x20(groupeJid)\x20VALUES\x20($1)','3845514xjmpdF','Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20groupe\x20banni\x20:','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20groupe\x20banni\x20:','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','18eoHJOA','log','release','DELETE\x20FROM\x20banGroup\x20WHERE\x20groupeJid\x20=\x20$1','Groupe\x20JID\x20','\x20ajouté\x20à\x20la\x20liste\x20des\x20groupes\x20bannis.','query','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27banGroup\x27:','77ETWIAU','error','2714550IiCzAm','DATABASE_URL','exists','La\x20table\x20\x27banGroup\x27\x20a\x20été\x20créée\x20avec\x20succès.','\x20supprimé\x20de\x20la\x20liste\x20des\x20groupes\x20bannis.','677958mwnJjQ','3508743xsMmqH'];_0x5efd=function(){return _0x5cc528;};return _0x5efd();}(function(_0x5b5698,_0x38ff2f){const _0x37fd8b=_0x3de5,_0x376021=_0x5b5698();while(!![]){try{const _0x242114=parseInt(_0x37fd8b(0x79))/0x1+-parseInt(_0x37fd8b(0x8d))/0x2+parseInt(_0x37fd8b(0x92))/0x3*(-parseInt(_0x37fd8b(0x78))/0x4)+parseInt(_0x37fd8b(0x76))/0x5*(parseInt(_0x37fd8b(0x7f))/0x6)+-parseInt(_0x37fd8b(0x93))/0x7+-parseInt(_0x37fd8b(0x94))/0x8*(parseInt(_0x37fd8b(0x83))/0x9)+parseInt(_0x37fd8b(0x7c))/0xa*(parseInt(_0x37fd8b(0x8b))/0xb);if(_0x242114===_0x38ff2f)break;else _0x376021['push'](_0x376021['shift']());}catch(_0x49fb0f){_0x376021['push'](_0x376021['shift']());}}}(_0x5efd,0xe5e51),require('dotenv')[_0x347309(0x7d)]());const {Pool}=require('pg'),s=require(_0x347309(0x7b));var dbUrl=s[_0x347309(0x8e)]?s[_0x347309(0x8e)]:_0x347309(0x82);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableBanGroup=async()=>{const _0x2519df=_0x347309;try{await pool['query']('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20banGroup\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20groupeJid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0x2519df(0x84)](_0x2519df(0x90));}catch(_0x7ad857){console['error'](_0x2519df(0x8a),_0x7ad857);}};creerTableBanGroup();async function addGroupToBanList(_0x269472){const _0x31e56f=_0x347309,_0x3a136f=await pool['connect']();try{const _0x3ef6a2=_0x31e56f(0x7e),_0x33e279=[_0x269472];await _0x3a136f[_0x31e56f(0x89)](_0x3ef6a2,_0x33e279),console['log'](_0x31e56f(0x87)+_0x269472+_0x31e56f(0x88));}catch(_0x3848fb){console['error'](_0x31e56f(0x81),_0x3848fb);}finally{_0x3a136f[_0x31e56f(0x85)]();}}async function isGroupBanned(_0x68fbc3){const _0xf4e70d=_0x347309,_0x3bab38=await pool[_0xf4e70d(0x77)]();try{const _0x29dc42=_0xf4e70d(0x7a),_0x5018dc=[_0x68fbc3],_0x13c903=await _0x3bab38[_0xf4e70d(0x89)](_0x29dc42,_0x5018dc);return _0x13c903[_0xf4e70d(0x95)][0x0][_0xf4e70d(0x8f)];}catch(_0x1a3589){return console[_0xf4e70d(0x8c)]('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20banni\x20:',_0x1a3589),![];}finally{_0x3bab38[_0xf4e70d(0x85)]();}}async function removeGroupFromBanList(_0x50f929){const _0x413681=_0x347309,_0x2d4908=await pool[_0x413681(0x77)]();try{const _0x2751b5=_0x413681(0x86),_0x538cdf=[_0x50f929];await _0x2d4908['query'](_0x2751b5,_0x538cdf),console[_0x413681(0x84)](_0x413681(0x87)+_0x50f929+_0x413681(0x91));}catch(_0x3f6235){console[_0x413681(0x8c)](_0x413681(0x80),_0x3f6235);}finally{_0x2d4908[_0x413681(0x85)]();}}module['exports']={'addGroupToBanList':addGroupToBanList,'isGroupBanned':isGroupBanned,'removeGroupFromBanList':removeGroupFromBanList};
