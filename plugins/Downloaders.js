const { tlang, ringtone, Module_Exports,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, name } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const fetch = require('node-fetch');
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tgs",
            infocmd: "Downloads telegram stickers.",
            kingclass: "download commands",
            kingpath: __filename,
            use: '<add sticker url.>'
        },
        async(Void, citel, text) => {
		if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
		if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
		let tgUrl = text.split("|")[0];
		let find = tgUrl.split("/addstickers/")[1];
		let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
		let check = text.split("|")[1] || "";
		let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
		if (result.is_animated) return await citel.reply("Animated stickers are not supported");
  		else if (check.startsWith("info")) return await citel.reply(res);
		let limit = parseInt(check.split(",")[0]) || 10;
		let count =  parseInt(check.split(",")[1]) ||  0;
	 	let isCheckText = check.split(";")[1] ||  "Sticker"
		let isSticker = true ;
	        if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
		if(limit > result.stickers.length ) {  limit = result.stickers.length  }
	        if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
		if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
		await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
		for ( count ; count < limit ; count++) 
		{
		 // if (count >= limit) break;
		  let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
		  let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
		  if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: name.packname, author: "Suhail-Md"  }, "sticker");} 
		  else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
		  //count++;
		}


 
//function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':name['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        
	
 
 })
//---------------------------------------------------------------------------


Module_Exports({
    kingcmd: "apk",
    infocmd: "Downloads apks.",
    kingclass: "download commands",
    use: 'Whatsapp'
  }, async (sigma, person, text) => {
    if (!text) {
      return person.send("*_Give me App Name_*\nEx: " + prefix + "apk Whatsapp");
    }
    let randomName = '' + Math.floor(Math.random() * 10000) + ".apk";
    const filePath = './' + randomName;
    const {
      search,
      download
    } = require("aptoide-scraper");
    let searc = await search(text);
    let data = {};
    if (searc.length) {
      data = await download(searc[0].id);
    } else {
      return person.reply("*_APP not Found, Try Valid App Name_*");
    }
    const apkSize = parseInt(data.size);
    if (apkSize > 150) {
      return person.reply("*_File size bigger than 200MB._*");
    }
    const url = data.dllink;
    let inf = "┏━━↱ " + mztit + " ↰━▢\n≡┏➛ *ɢɴɪᴍᴇ ᴍᴅ*\n≡┗➛ *ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n➮ *𝙰𝙿𝙿 𝙽𝙰𝙼𝙴* " + data.name;
    inf += "\n➮ *𝙰𝙿𝙿 𝚂𝙸𝚉𝙴* " + data.size;
    inf += "\n➮ *𝚅𝙴𝚁𝚂𝙸𝙾𝙽* Latest";
    inf += "\n➮ *ʀᴇǫᴜᴇsᴛᴇʀ*  " + person.pushName;
    inf += "\n┗━━━━━━━━━━▢\n* 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 " + name.botname + '*';
    axios.get(url, {
      'responseType': "stream"
    }).then(_0x5197e8 => {
      const _0x349c1b = fs.createWriteStream(filePath);
      _0x5197e8.data.pipe(_0x349c1b);
      return new Promise((_0xf7bdbd, _0x1dd310) => {
        _0x349c1b.on("finish", _0xf7bdbd);
        _0x349c1b.on("error", _0x1dd310);
      });
    }).then(() => {
      let _0x492877 = {
        'document': fs.readFileSync(filePath),
        'mimetype': "application/vnd.android.package-archive",
        'fileName': data.name + ".apk",
        'caption': inf
      };
      sigma.sendMessage(person.chat, _0x492877, {
        'quoted': person
      });
      person.send(" *ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* " + text);
      fs.unlink(filePath, _0x2f0cff => {
        if (_0x2f0cff) {
          console.error("Error deleting file:", _0x2f0cff);
        } else {
          console.log("File deleted successfully");
        }
      });
    })["catch"](_0x395718 => {
      fs.unlink(filePath);
      return person.reply("*_Apk not Found, Sorry_*");
    });
  });
  //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "gdrive",
            infocmd: "Downloads telegram stickers.",
            kingclass: "download commands",
            kingpath: __filename,
            use: 'add sticker url.'
        },

async(Void, citel, text) => {
if (!text) return citel.send('Uhh Please, Give me  Google Drive Url') 
if (!(text && text.match(/drive\.google/i))) citel.send('Uhh Please, Give me Valid Google Drive Url')
let id =(text.match(/\/?id=(.+)/i) || text.match(/\/d\/(.*?)\//))[1]
if (!id) return citel.reply('ID Not Found');
try {
	GDriveDl(id).then(async (res) => 
	{ 
                let data  =  "*File Name :* "+ res.fileName ;
	            data +="\n*File Size :* " + res.size +"Mb" ;
	            data +="\n*File Type :* "+ res.mimetype.split('/')[1] +  "\n" + name.caption;
	        let buttonMessage = 
		{
			document: { url: res.downloadUrl },
			fileName: res.fileName,
			mimetype: res.mimetype,
			caption : "\t  *GOOGLE DRIVE DOWNLOADER*  \n" + data
		}
	        return await Void.sendMessage(citel.chat,buttonMessage, { quoted: citel })
	})
 } catch (error) {  return citel.reply("```File Not Found```" ) }
	
})
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "gitclone",
    shortcut: ["gclone", "gitc"],
    infocmd: "Downloads github repo",
    kingclass: "download commands",
    kingpath: __filename,
    use: 'https://github.com/Astropeda/Gnime-lite'
  }, async (sigma, person, tax) => {
    if (!tax) {
      return await person.send("*_Provide Repo Url,_*\n Ex: " + prefix + "gitclone *https://github.com/Astropeda/Gnime-lite*");
    }
    if (!tax.includes("github.com")) {
      return person.send("_The link you provided is invalid_");
    }
    try {
      if (!/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(tax)) {
        return await person.reply("*_Please, Provide Valid Repositry Url_*");
      }
      repo = repo.replace(/.git$/, '');
      let url = "https://api.github.com/repos/" + user + '/' + repo + "/zipball";
      let filename = (await fetch(url, {
        'method': "HEAD"
      })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
      await sigma.sendMessage(person.chat, {
        'document': {
          'url': url
        },
        'caption': "┏━━↱ " + mztit + " ↰━▢\n≡┏➛ *ɢɴɪᴍᴇ ᴍᴅ*\n≡┗➛ *ʀᴇᴘᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n➮ *ᴀᴜᴛʜᴏʀ* " + user + "\n➮ *ʀᴇᴘᴏ* " + repo + "\n➮ *ꜰɪʟᴇ-ᴛʏᴘᴇ* zip\n➮ *ʀᴇᴘᴏ-ʟɪɴᴋ* https://github.com/" + user + '/' + repo + "\n➮ *ʀᴇǫᴜᴇsᴛᴇʀ*  " + person.pushName + "\n┗━━━━━━━━━━▢\n* 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 " + name.botname + '*',
        'fileName': filename,
        'mimetype': "application/zip"
      });
    } catch (_0x38ce15) {
      person.send("*_The Repo is Private Or It May Be Temporary Down_*\n " + _0x38ce15);
    }
  });

  //---------------------------------------------------------------------------
  Module_Exports({
    kingcmd: "tts",
    infocmd: "text to voice",
    kingclass: "download commands",
    kingpath: __filename,
    use: 'I am king',
},
async(sigma, person, memo) => {
    if (!memo) return person.reply(`_Give me text to change into audio_\nEx: ${prefix}tts i am a boy`)
    person.reply("*_Converting Your Text To Voice..._*")
    let memotts = memo
    const ttsurl = googleTTS.getAudioUrl(memotts, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
    });
    return sigma.sendMessage(person.chat, {
        audio: {
            url: ttsurl,
        },
        mimetype: "audio/mpeg",
        fileName: `ttspersonsigma.m4a`,
    }, {
        quoted: person,
    });
}

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "video",
        infocmd: "Downloads video from yt.",
        kingclass: "download commands",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(bot, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}video Surah Fateh`);
        let search = await yts(tax);
        let anu = search.videos[0];
        let urlYt = anu.url
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Video Size too Large!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp4");
            citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+tax)
            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let Maher = {
                    video: fs.readFileSync(`./${randomName}`),
                    jpegThumbnail: log0,
        
                    mimetype: 'video/mp4',
                    caption: sgen,
        height: 640,
                    width: 780,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: snam,
                            body: `ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            renderLargerThumbnail: true,
                            mediaType: 4,
                            mediaUrl: ``,
                            sourceUrl: zyt,
                        }
                    }
                }
             bot.sendMessage(citel.chat, Maher, { quoted: citel })
             return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB..`);
            }
            return fs.unlinkSync(`./${randomName}`);      


    }
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "song",
        infocmd: "Downloads audio from youtube.",
        kingclass: "download commands",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(bot, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}song My Babe i love Your Voice`);
        let search = await yts(tax);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+tax)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let buttonMessage = {
                audio: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: tax,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: zyt,
                        
                    },
                },
            }
            await bot.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Then 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "music",
            infocmd: "Downloads tiktok music.",
            kingclass: "download commands",
            kingpath: __filename,
            use: '78',
        },
        async(bot, citel, tax) => {
            if (!tax) return citel.send(`*Give A Number Example: ${prefix}music 3*`)
            citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+tax)
	const n = parseInt(tax);
	if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```Give Number From 1 to 160```');
	   let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await bot.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
		audio: anu,
		fileName: url.toString() ,
		mimetype: 'audio/mp4',
		ptt: true ,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: `ᴍᴜsɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                //thumbnail: log0,
                mediaType: 2,


                sourceUrl: zyt,
                
            },
        },
		}
	return bot.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "ringtone",
            infocmd: "Downloads ringtone.",
            kingclass: "download commands",
            kingpath: __filename,
            use: 'apple',
        },
        async(bot, citel, tax) => {
            if (!tax) return citel.send(`Example: ${prefix}ringtone bella ciao`)
            citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+tax)
	    const {ringtone } = require('../lib/scraper')
            let anu = await ringtone(tax)
        let buttonMessage = {
		audio: { url: anu[0].audio },
		caption : `*${anu[0].title}*`,
		fileName: anu[0].title + '.mp3',
		mimetype: 'audio/mpeg',
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: `ʀɪɴɢᴛᴏɴᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                thumbnail: log0,
                mediaType: 2,


                sourceUrl: zyt,
                
            },
        },
		}
	return bot.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "pinterest",
        desc: "Downloads image from pinterest.",
        category: "download commands",
        filename: __filename,
        use: '<text|image name>',
    },
    async(Void, citel, text) => {
        if (!text) return citel.send(`What picture are you looking for?`)
        citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+text)
        try {
            let anu = await pinterest(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            let buttonMessage = {
                image: { url: result },
                caption: sgen ,
                //footer: tlang().footer,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `ᴘɪɴᴛᴇʀᴇsᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: zyt
                    }
                }
            }
            return Void.sendMessage(citel.chat, buttonMessage, {  quoted: citel })
        } catch (e) {  return citel.reply(`*_Give Me Query_*\n*_Ex ${prefix}pint crown_*`)  }
    })
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "mediafire",
            shortcut :['mf','mfire'],
            infocmd: "Downloads media from Mediafire.",
            kingclass: "download commands",
            kingpath: __filename,
            use: 'url of mediafire',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link `);
            
            if (!text.includes("mediafire.com")) return citel.reply(`The link you provided is invalid`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);
	
	if(!baby1.length) return citel.reply(`could not found anything`);
	const apkSize = parseInt(baby1[0].size);
	if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);
	
let result4 = ` *Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* :${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}

`;
	result4 +=name.caption ; 
	
            //citel.reply(`${result4}`);
            
            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                    
                }; 
                
 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------

   
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "audio",
        infocmd: "Downloads audio from youtube.",
        kingclass: "download commands",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(sigma, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}audio My Babe i love Your Voice`);
        let search = await yts(tax);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+tax)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let buttonMessage = {
                document: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: tax,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: zyt,
                        
                    },
                },
            }
            await sigma.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Then 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "yts",
        infocmd: "Sends given text result with all info and media links",
        kingclass: "download commands",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(sigma, person, memo) => {
        let yts = require("secktor-pack");
        if (!memo) return person.send(`Example: ${prefix}yts surah Rehman`);
        let search = await yts(memo);
        let memot = "*ɢɴɪᴍᴇ* *ʏᴏᴜ-ᴛᴜʙᴇ sᴇᴀʀᴄʜ*\n\n *_Search Result From_* " + memo + "\n\n*✯────────────────────✯*\n\n";
        let no = 1;
        for (let i of search.all) {
            memot += `*ᴛɪᴛʟᴇ* : ${i.title}\n*ᴠɪᴇᴡs* : ${i.views}\n*ᴅᴜʀᴀᴛɪᴏɴ* : ${
      i.timestamp
    }\n*ᴜʀʟ* : ${
      i.url
    }\n\n*✯────────────────────✯*\n`;
        }
        return sigma.sendMessage(person.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: memot,
        }, {
            quoted: person,
        });
    }
)
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "ytmp4",
            shortcut: ["ytv","ytvid" , "ytvideo","yt4"],
            infocmd: "Downloads video from youtube.",
            kingclass: "download commands",
            kingpath: __filename,
            use: 'yt video url',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply("*_Give ME YouTube Link_*");
                return;
            }
            citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+text)
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply("*_Plz Give ME YouTube Link_*");
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Video File Too Big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        caption: sgen,
                        height:640,
                        width:780,
                        fileName: `${titleYt}.mp4`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: snam,
                                body: `ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                                //thumbnailUrl: await getBuffer(search.all[0].thumbnail),
                                //renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: ``,
                                thumbnail:log0,
                                sourceUrl: zyt
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`Video Size IS Larger Than 100MB`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "ytmp3",
	shortcut : ["yta","yt3"],
	infocmd: "Downloads audio by yt link.",
        kingclass: "download commands",
        use: 'yt video url',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply('```Please Give Me Link```');
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`_Idiot Give YouTube Link_!`);
                return;
            }
            citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+text)
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`_I can't Download That Long Audio_`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: sgen,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: snam,
                            body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                           // renderLargerThumbnail: true,
                            thumbnail: log0,
                            mediaUrl: text,
                            mediaType: 1,
                            //thumbnailUrl: log0,
                            sourceUrl: zyt,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "ytdoc",
            shortcut: ["ytd"],
        infocmd: "Downloads audio by yt link as document.",
        kingclass: "download commands",
        use: 'ytdoc video url',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply('```Please Give Me Link```');
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`_Idiot Give YouTube Link_`);
                return;
            }
            citel.reply('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ:* '+text)
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`_I can't Download That Long Audio_!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: sgen,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: snam,
                            body: `‌ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                            //renderLargerThumbnail: true,
                            //thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                           // thumbnail: log0,
                            sourceUrl: zyt,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

})

Module_Exports({
    kingcmd: "play",
    infocmd: "Downloads Media From Youtube",
    kingclass: "download commands",
    kingpath: __filename,
    use: 'bella ciao'
  }, async (bot, man, text) => {
    if (!text) {
      return await man.send("*_PLease, Give Me Song Name_*\nEx: " + prefix + "play bella ciao");
    }
    let yts = require("secktor-pack");
    let search = await yts(text);
    let i = search.all[1];
    let cap = "*ɢɴɪᴍᴇ ᴍᴅ* *ʏᴏᴜ-ᴛᴜʙᴇ ᴘʟᴀʏᴇʀ*\n\n*ᴛɪᴛʟᴇ* " + i.title + "\n*ᴅᴜʀᴀᴛɪᴏɴ* " + i.timestamp + "\n*ᴠɪᴇᴡs* " + i.views + "\n*ᴜᴘʟᴏᴀᴅᴇᴅ* " + i.ago + "\n*ᴀᴜᴛʜᴏʀ* " + i.author.name + "\n*ᴜʀʟ* " + i.url + ("\n*ʀᴇǫᴜᴇsᴛᴇʀ* " + man.pushName + "\n\n\n*_Reply 1 For Video_* \n*_Reply 2 For Audio_*");
    bot.sendMessage(man.chat, {
      'image': {
        'url': i.thumbnail
      },
      'caption': cap
    });
  });
  
  //-----------------------------------------------------------------
  
  Module_Exports({
    on: "text"
  }, async (Void, citel, text, {
    isCreator
  }) => {
    if (citel.quoted && citel.text) {
      const lines = citel.quoted.text.split("\n");
      if (lines[0x0].includes("*ɢɴɪᴍᴇ ᴍᴅ* *ʏᴏᴜ-ᴛᴜʙᴇ ᴘʟᴀʏᴇʀ*")) {
        const urlLine = lines.find(_0x4d3aae => _0x4d3aae.startsWith("*ᴜʀʟ*"));
        let urlYt = urlLine.replace('*ᴜʀʟ*', '').trim();
        try {
          let randomName;
          if (citel.text.startsWith('1')) {
            randomName = "./ytsong.mp4";
            const stream = ytdl(urlYt, {
              'filter': _0x366613 => _0x366613.itag == 0x16 || _0x366613.itag == 0x12
            }).pipe(fs.createWriteStream(randomName));
            await new Promise((_0x594b37, _0x3484a0) => {
              stream.on("error", _0x3484a0);
              stream.on('finish', _0x594b37);
            });
            await Void.sendMessage(citel.chat, {
              'video': fs.readFileSync(randomName),
              'mimetype': "video/mp4",
              'caption': `* 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`
            }, {
              'quoted': citel
            });
          } else {
            if (citel.text.startsWith('2')) {
              randomName = './ytsong.mp3';
              const stream = ytdl(urlYt, {
                'filter': _0xb925ca => _0xb925ca.audioBitrate == 0xa0 || _0xb925ca.audioBitrate == 0x80
              }).pipe(fs.createWriteStream(randomName));
              await new Promise((_0xbd802f, _0x3e8a3) => {
                stream.on('error', _0x3e8a3);
                stream.on("finish", _0xbd802f);
              });
              await Void.sendMessage(citel.chat, {
                'audio': fs.readFileSync(randomName),
                'mimetype': "audio/mpeg"
              }, {
                'quoted': citel
              });
            }
          }
          try {
            return fs.unlinkSync(randomName);
          } catch (_0x4b8369) {}
        } catch (_0x2c1b30) {
          return await citel.reply("Error While Downloading Video : " + _0x2c1b30);
        }
      }
    }
  });

/////////////////////////////////////////

