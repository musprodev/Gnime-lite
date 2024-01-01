const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

let cap = `╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${Config.botname}`
 Module_Exports({
    kingcmd: "instagram",
    shortcut: ["ig","insta","igdl","instagram"],
    infocmd: "download instagram videos",
    kingclass: "download commands",
    use: "paste insta video link"
     },
     async(Void,citel,text) => {
 if(!text) return citel.reply('Give me insta video link')
 let txt = text ? text.split(" ")[0]:'';
 if (!/instagram/.test(txt)) return await citel.reply(`Please give me valid instagram video link..!`);
 let data;
 try{ data= await (await fetch(`https://vihangayt.me/download/instagram2?url=${text}`)).json();} 
 catch { return citel.reply(`An error occurred`);  }
 return Void.sendMessage(citel.chat, {video : {url : data.result[0] },caption: cap,width: 600,height: 490, },{ quoted: citel })
})
Module_Exports({
    kingcmd: "tiktok",
	    shortcut :  ['tt','ttdl'],
            infocmd: "Downloads Tiktok Videos Via Url.",
            kingclass: "download commands",
            use: "paste tiktok video link",
},

async(Void, citel, text) => {
if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`);
let txt = text ? text.split(" ")[0]:'';
if (!/tiktok/.test(txt)) return await citel.reply(`*Uhh Please, Give me Valid Tiktok Video Url!*`);
const { status ,thumbnail, video, audio } = await tiktokdl(txt)
//console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
if (status) return await Void.sendMessage(citel.chat, {video : {url : video } ,  } , {quoted : citel });
else return await citel.reply("Error While Downloading Your Video") 
})
