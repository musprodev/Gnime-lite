const moment = require('moment-timezone')
const {fetchJson,Module_Exports, tlang, getBuffer, prefix, name,fancytext,botpic } = require('../lib')
let gis ='' // require("g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

   //---------------------------------------------------------------------------
   const { shazam } = require('../lib')
   let yts = require("secktor-pack");
   Module_Exports({
           kingcmd: "find",
           kingclass: "search",
           infocmd: "Finds info about song",
           kingpath: __filename,
       },
       async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!citel.quoted) return citel.reply(`Reply to Audio`);
            if (!/audio/.test(mime)) return citel.reply(`Send/Reply audio ${prefix}shazam`);
            let buff = await citel.quoted.download();
            let data = await shazam(buff);
            if (!data.status) return citel.send(data);
            let search = await yts(data.title);
            let anu = search.videos[0];
            let h =`*Title : _${data.title}_*           
*Artist : _${data.artists}_*            
*To Download Song:- _${prefix}yta ${anu.url}_*
   `
//   *Album :* _${data.album}_    
//   *Release :* _${data.release_date}


   let buttonMessaged = {
                   image: { url: anu.thumbnail, },
                   caption: h,
                   footer: tlang().footer,
                   headerType: 4,
                   contextInfo: {
                       externalAdReply: {
                           title: data.artists,
                           body: data.album,
                           thumbnail: log0,
                           mediaType: 2,
                           mediaUrl: ``,
                           sourceUrl: ``,
                       },
                   },
               };
               await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel, });
       }
    )
    //------------------------------------------------------------------------------------
Module_Exports({
            kingcmd: 'ss',
            shortcut :['webss' , 'fullss'],
            kingclass: "search",
            infocmd: "Searches Image on Google",
            use: '',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
let limit = 5;
 try {
    if (!text) return citel.reply("```Uhh Please, Give me Url!```");
    var url = text;
    let urll = `https://s.vercel.app/api?url=${url.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
    let media  = await getBuffer(urll)
    return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
 }
catch (err) { return citel.reply("```Error While Fetching Snapshot```")}
        }
    )



    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "imdb",
            kingclass: "search",
            infocmd: "Sends image of asked Movie/Series.",
            use: 'kingsman',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*_Name a Series or movie_*\nEx: ${prefix}imdb kingman`);
            try{
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            
            let imdbt = "";
            
            citel.reply(fids.data)
            
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ```     𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
            imdbt += "🎬Title      : " + fids.data.Title + "\n";
            imdbt += "📅Year       : " + fids.data.Year + "\n";
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
            imdbt += "📆Released   : " + fids.data.Released + "\n";
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
            imdbt += "🌐Language   : " + fids.data.Language + "\n";
            imdbt += "🌍Country    : " + fids.data.Country + "\n";
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
            imdbt += "🏙️Production : " + fids.data.Production + "\n";
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "\n";
            imdbt += name.caption ;
            Void.sendMessage(citel.chat, {  image: { url: fids.data.Poster, }, caption: imdbt,  }, {   quoted: citel,  });}
            catch{
                citel.reply("*_Wrong Movie Name_* ")}


        }
    )
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "weather",
        kingclass: "search",
        infocmd: "Sends weather info about asked place.",
        use: 'Lagos',
    },
    async(sigma, person, text) => {
const _0x51287e=_0x8f43;(function(_0x208e10,_0x52e448){const _0xb617f6=_0x8f43,_0x1bb95b=_0x208e10();while(!![]){try{const _0x63e6e8=-parseInt(_0xb617f6(0x109))/(0xd75+0x11c7+0xd*-0x267)*(parseInt(_0xb617f6(0x159))/(-0xa*0x1ba+0xac+-0x2*-0x84d))+-parseInt(_0xb617f6(0x142))/(0x785+-0x1*0xb3f+0x3bd)+parseInt(_0xb617f6(0x10e))/(0x17f9+0xb35+0x232a*-0x1)+-parseInt(_0xb617f6(0x145))/(-0x7f5+0x1*-0xe8f+0x1689)*(parseInt(_0xb617f6(0x121))/(0x1f35+0x1853+-0x3782))+-parseInt(_0xb617f6(0x127))/(-0x2b*0xc7+0x2044+0x130)*(parseInt(_0xb617f6(0x12b))/(-0x1349*-0x1+0x1*0x2480+-0x37c1))+parseInt(_0xb617f6(0x107))/(-0x1c55+-0x59*0x29+0x2a9f)+-parseInt(_0xb617f6(0x10a))/(0x174f+-0x19a4+0x25f)*(-parseInt(_0xb617f6(0x14a))/(0xdab*-0x1+0x15fd+0xa3*-0xd));if(_0x63e6e8===_0x52e448)break;else _0x1bb95b['push'](_0x1bb95b['shift']());}catch(_0x2cb641){_0x1bb95b['push'](_0x1bb95b['shift']());}}}(_0x3c87,0x3cc9b*-0x1+-0x6*0xb747+0x10cc3f));if(!text)return person[_0x51287e(0x158)](_0x51287e(0x11a)+_0x51287e(0x132)+_0x51287e(0x118)+prefix+(_0x51287e(0x12d)+_0x51287e(0x11d)));function _0x8f43(_0x38f783,_0x37e92c){const _0x40f902=_0x3c87();return _0x8f43=function(_0x1d7b48,_0x2f729b){_0x1d7b48=_0x1d7b48-(-0x183f*-0x1+-0x8df+0x7*-0x20d);let _0x24d820=_0x40f902[_0x1d7b48];return _0x24d820;},_0x8f43(_0x38f783,_0x37e92c);}person[_0x51287e(0x155)](_0x51287e(0x130)+_0x51287e(0x148)+_0x51287e(0x13e)+_0x51287e(0x12c)+text);try{let wdata=await axios[_0x51287e(0x14e)](_0x51287e(0x15b)+_0x51287e(0x128)+_0x51287e(0x151)+_0x51287e(0x137)+_0x51287e(0x119)+text+(_0x51287e(0x134)+_0x51287e(0x117)+_0x51287e(0x12a)+_0x51287e(0x111)+_0x51287e(0x146)+_0x51287e(0x15a)+_0x51287e(0x112))),mz='';mz+=_0x51287e(0x13a)+mztit+(_0x51287e(0x14c)+_0x51287e(0x129)+_0x51287e(0x131)+_0x51287e(0x12f)+_0x51287e(0x11f))+fancytext(_0x51287e(0x144)+'f*',0x7*-0x145+-0x270b*0x1+0x6d9*0x7)+'\x20'+text+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x13f)+'*',-0x5*0x3c7+-0x3*0x6ff+-0x27e1*-0x1)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x10d)][_0x51287e(0x143)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x157)+_0x51287e(0x156),-0x47d*-0x1+-0x2*0x1061+0x1c46)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x126)][0x19+0xaaa+-0xac3][_0x51287e(0x150)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x15d)+_0x51287e(0x12e),0x169a+0xb82+-0x221b)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x126)][-0xf8e*0x2+-0x36+0x1a6*0x13][_0x51287e(0x125)+'n']+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x122)+_0x51287e(0x141),-0x233*-0x5+-0x17c8+0xcca)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x150)][_0x51287e(0x139)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x120)+_0x51287e(0x138),0x2b*0x65+-0x1418+-0x191*-0x2)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x150)][_0x51287e(0x140)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x152)+'*',0x22b2*0x1+0x416*-0x4+-0x1259)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x150)][_0x51287e(0x147)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x116)+'*',-0x25a+0x13fd+-0x7a*0x25)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x150)][_0x51287e(0x10b)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x123)+_0x51287e(0x15c),0x1*-0x1176+0x2*-0x9c5+0x2501)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x10f)][_0x51287e(0x14b)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x124)+'*',0xa*-0x4b+-0x16*0x153+0x1*0x2011)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x14d)][_0x51287e(0x115)]+'\x0a',mz+=_0x51287e(0x13c)+fancytext(_0x51287e(0x154)+_0x51287e(0x108),0x216d*0x1+-0xfe3+-0x1189)+'\x20'+wdata[_0x51287e(0x133)][_0x51287e(0x14d)][_0x51287e(0x13d)]+(_0x51287e(0x14f)+_0x51287e(0x11b)+_0x51287e(0x110)+'\x20')+name[_0x51287e(0x106)]+'*';const slog=await getBuffer(global[_0x51287e(0x114)]);let king={'image':{'url':await botpic()},'text':mz,'footer':tlang()[_0x51287e(0x10c)],'headerType':0x4,'contextInfo':{'externalAdReply':{'title':''+Gname,'body':_0x51287e(0x11c)+'e','thumbnail':slog,'mediaType':0x4,'mediaUrl':'','sourceUrl':''+waUrl}}};sigma[_0x51287e(0x136)+'e'](person[_0x51287e(0x105)],king,{'quoted':person});}catch{person[_0x51287e(0x158)](_0x51287e(0x153)+_0x51287e(0x149)+_0x51287e(0x135)+_0x51287e(0x13b)+_0x51287e(0x113)+_0x51287e(0x11e)+_0x51287e(0x132));}function _0x3c87(){const _0x4530d8=['ric&appid=','...!\x0aEx:\x20','weather?q=','*_Give\x20me\x20','━━▢\x0a*𝙶𝙴','Easy\x20to\x20Us','hore','e\x20a\x20Valid\x20','\x0a➮\x20\x20\x20\x20\x20\x20\x20','*feels-li','210ztztvU','*temperat','*wind-spe','*latitude','descriptio','weather','64771YWHcXe','i.openweat','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','060a6bcfa1','296kRcLkx','nfo\x20Of_*\x20','weather\x20la','ion*','ᴇʀ\x20sᴇᴀʀᴄʜ*','*_Wait\x20Whi','≡┗➛\x20*ᴡᴇᴀᴛʜ','Location_*','data','&units=met','n\x20is\x20Inval','sendMessag','/data/2.5/','ke*','temp','┏━━↱\x20','id_*\x0a*_Ple','➮\x20','lon','\x20Weather\x20I','*country','feels_like','ure*','1581732wlAYJg','country','*weather\x20o','58245bylUcp','97a212b192','pressure','le\x20Getting','en\x20Locatio','11DEXvEm','speed','\x20↰━▢\x0a≡┏➛\x20*','coord','get','\x0a┗━━━━━━━━','main','hermap.org','*pressure','*_Your\x20Giv','*longitud','send','n*','*conditio','reply','20WMgJfp','73&languag','https://ap','ed*','*descript','chat','botname','8891955MoXLZC','e*','74787QomYGj','10062110AcRGYp','humidity','footer','sys','2405384TzfFHL','wind','𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱𝚈','9809c2cd4d','e=en','ase\x20Give\x20M','slogo','lat','*humidity'];_0x3c87=function(){return _0x4530d8;};return _0x3c87();}
        }
)
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "horo",
            kingclass: "search",
            infocmd: "Gives horoscope info of user.",
            use: 'sign\n:Example: horo libra',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Provide me a sign!`)
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        textw +=name.caption ;
                        citel.reply(textw)
                    });

            } catch (e) {   console.log(e)  }
        }
    )
    //---------------------------------------------------------------------------

    Module_Exports({
        kingcmd: "cricket",
        shortcut: ['cric'],
        kingclass: "search",
        infocmd: "Sends info of about cricket",
        use: '',
        kingpath: __filename
      }, async (bot, man, tax) => {
        man.send(`*_Please Wait, While Getting Cricket Updates_*`);
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78");
        const dat = await response.json();
        console.log(dat);
        for (let i = 0; i < dat.data.length; i++) {
          tax += "\n*✯────𝐌𝐀𝐓𝐂𝐇 " + i + "────✯*";
          tax += "\n*𝙼𝙰𝚃𝙲𝙷 𝙽𝙰𝙼𝙴* " + dat.data[i].name;
          tax += "\n*𝙼𝙰𝚃𝙲𝙷 𝚂𝚃𝙰𝚃𝚄𝚂* " + dat.data[i].status;
          tax += "\n*𝙼𝙰𝚃𝙲𝙷 𝙳𝙰𝚃𝙴* " + dat.data[i].dateTimeGMT;
          tax += "\n*𝙼𝙰𝚃𝙲𝙷 𝚂𝚃𝙰𝚁𝚃𝙴𝙳* " + dat.data[i].matchStarted;
          tax += "\n*𝙼𝙰𝚃𝙲𝙷 𝙴𝙽𝙳𝙴𝙳* " + dat.data[i].matchEnded + "\n";
        }
        return await man.reply(tax);
      });

//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "google",
            shortcut :['gsearch'],
            kingclass: "search",
            infocmd: "Sends info of given query from Google Search.",
            use: 'who is king',
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`give me a query\n*Ex: ${prefix}google Who is KING.*`);
            let google = require('google-it');
            google({ 'query': text}).then(res => {
                let msg= `*Google Search From:* ${text} \n\n`;
                for (let g of res) {
                    msg+= `➣ *ᴛɪᴛʟᴇ* ${g.title}\n`;
                    msg+= `➣ *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽* ${g.snippet}\n`;
                    msg+= `➣ *𝙻𝙸𝙽𝙺* ${g.link}\n\n✯─────────────────────✯\n\n`;
                }
             
                return citel.reply(msg);
            })
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "image",
            shortcut: ["img"],
            kingclass: "search",
            infocmd: "Searches Image on Google",
            use: 'Quran pics',
            kingpath: __filename,
        },
        async(Void, citel, text) => {

   if (!text) return citel.reply(`Provide me a query!\n*Ex: ${prefix}image crown |10*`)
   let buttonMessage = {}
   let name1 = text.split("|")[0] || `Luffy`
   let name2 = text.split("|")[1] || `5`
 try {
    let urlsArray = [];
    const params = {
        q: name1, 
        tbm: "isch",
        hl: "en",
        gl: "in",
        ijn: "0", 
    };
    const headers = {
      "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
      "Accept-Encoding": "application/json",
  };
  
    const res = await axios.get("https://www.google.com/search", { headers: headers, params: params });
    let body = res.data;
    body = body.slice(body.lastIndexOf("AF_initDataCallback"));
    body = body.slice(body.indexOf("["));
    body = body.slice(0, body.indexOf("</script>")-1);
    body = body.slice(0, body.lastIndexOf(","));
    
    const img = JSON.parse(body);

    const imgObjects = img[56][1][0][0][1][0];
    for (let i = 0; i < name2; i++) {
        if (imgObjects[i] && imgObjects[i][0][0]["444383007"][1]) {
            let url = imgObjects[i][0][0]["444383007"][1][3][0]; // the url
            urlsArray.push(url);
        }
    }

for (let url of urlsArray) { Void.sendMessage(citel.chat , {image : {url : url} } )  }
} 
 catch (error) {   return citel.reply("*_Google Images Not Working, Try it Later_*"); }

 
 
 /*
 
let isImages = false;
            let num = text.split("|")[1];
 gis(name1, async(error, result) => { 
if(result.length) 
{
 isImages = true;
 citel.reply(`Sending images of ${name1} in chat`) 
}
else return citel.reply("*Google Images Not Working, Try it Later*");
})
     if(!isImages) return       
            let nn = name2
            for (let i = 0; i < nn; i++) {
            gis(name1, async(error, result) => { 
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            
             
             if(!num){ buttonMessage = {   image: { url: images },
                                caption: name.caption,
                                }
             }else {  buttonMessage = {   image: { url: images },}   }
                    
             
             Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
                })
            }
            
            
            */
 })
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "iswa",
        kingclass: "search",
        infocmd: "Searches in given rage about given number.",
        use: '234803960xx',
        kingpath: __filename,
    },
    async(Void, citel, text) => {
 if(!text) return await citel.reply(`*_Give Me Number without + sign_*\nEx: ${prefix}iswa 9234663191xx`)
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply(`*You did not add x*\nEx: ${prefix}iswa 9234663191xx`)
        citel.reply(`*Searching WhatsApp accounts in given range...*`)

        function countInstances(string, word) {  return string.split(word).length - 1; }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) { randomxx = 10 } 
        else if (random_length == 2) { randomxx = 100 } 
        else if (random_length == 3) { randomxx = 1000 }
 
        text = `*--『 List of Whatsapp Numbers 』--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) { random = `${status1}` } 
            else if (random_length == 2) {random = `${status1}${status2}` } 
            else if (random_length == 3) {random = `${status1}${status2}${status3}` } 
            else if (random_length == 4) {random = `${status1}${status2}${status3}${dom4}` }
         
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try 
            {
                  try { var anu1 = await Void.fetchStatus(anu[0].jid); } 
                  catch { var anu1 = '401' ; }
                  if (anu1 == '401' || anu1.status.length == 0) { nobio += `wa.me/${anu[0].jid.split("@")[0]}\n` ; } 
                  else {  text += `*𝙽𝚄𝙼𝙱𝙴𝚁* wa.me/${anu[0].jid.split("@")[0]}\n*𝙱𝙸𝙾* ${anu1.status}\n*𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴* ${moment(anu1.setAt).tz('Africa/Lagos').format('HH:mm:ss DD/MM/YYYY')}\n\n` ;   }
            } catch { nowhatsapp += `${number0}${i}${number1}\n`; }
        }
        return await citel.reply(`${text}${nobio}${nowhatsapp}* 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`)

    }
)


Module_Exports({
        kingcmd: "nowa",
        kingclass: "search",
        infocmd: "Searches in given rage about given number.",
        use: '234803960xx',
        kingpath: __filename,
    },
    async(Void, citel, text) => {
if(!text) return await citel.reply(`*_Give Me Number without + sign_*\nEx: ${prefix}nowa 234803960xx`)
const inputNumber = text.split(" ")[0]
if (!inputNumber.includes('x')) return citel.reply(`*You did not add x*\nEx: ${prefix}nowa 234803960xxxx`)
citel.reply(`*Searching for WhatsApp account in the given range...*`);
function countInstances(string, word) { return string.split(word).length - 1; }
const number0 = inputNumber.split('x')[0];
const number1 = inputNumber.split('x').slice(-1)[0] || '';
const randomLength = countInstances(inputNumber, 'x');
const randomxx = [10, 100, 1000][randomLength - 1] || 0;
let nobio = `\n*『Accounts With No Bio』* \n`;
 let nobios='';
let nowhatsapp = `*『 Numbers With No WhatsApp』* \n\n`;
for (let i = 0; i < randomxx; i++) 
{
    const nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const status = nu.slice(0, randomLength).map(() => nu[Math.floor(Math.random() * nu.length)]).join('');
    const random = `${status}${nu[Math.floor(Math.random() * nu.length)]}`.slice(0, randomLength);
    const anu = await Void.onWhatsApp(`${number0}${i}${number1}`);
    const anuu = anu.length !== 0 ? anu : false;
    try 
    {
         const anu1 = await Void.fetchStatus(anu[0].jid);
         if (anu1 === '401' || anu1.status.length === 0) {  nobios += `wa.me/${anu[0].jid.split("@")[0]}\n`; } 
    } catch { nowhatsapp += `${number0}${i}${number1}\n`;  }
}
if(!nobios){ nobio = ''; } else {nobio += nobios+'\n' ;}
return await citel.reply(`${nobio}${nowhatsapp}* 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`);
  
})

// //////////////////////////////////