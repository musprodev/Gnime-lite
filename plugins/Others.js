const {Module_Exports,name } = require('../lib')
const hrs = new Date().getHours({ timeZone: global.timezone })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

Module_Exports({
    kingcmd: "creator",
    shortcut: ["dnum"],
    infocmd: "sends developer number for contact",
    kingclass: "developer"
  }, async (Void, citel, text) => {
    await Void.sendMessage(citel.chat, {
      'text': "┏━━↱ ɢɴɪᴍᴇ ↰━▢\n➮ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴀᴍᴇ* \n➮ *ɢɴɪᴍᴇ* \n➮ *ɴᴜᴍʙᴇʀ* https://wa.me/2348039607375\n➮ *sᴀᴠᴇ ᴍʏ ɴᴜᴍʙᴇʀ*\n➮ *ʙᴇғᴏʀᴇ ᴍᴇssᴀɢᴇ*\n┗━━━━━━━━━━▢\n        *ᴘᴏᴡᴇʀᴇᴅ ʙʏ* ɢɴɪᴍᴇ",
      'contextInfo': {
        'externalAdReply': {
          'title': "ɢɴɪᴍᴇ",
          'body': "ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ",
          'thumbnail': devp,
          'mediaType': 0x4,
          'mediaUrl': '',
          'sourceUrl': "https://wa.me/2348039607375"
        }
      }
    });
  });


    //--------------------------------------------------------------
    Module_Exports({
        kingcmd: "timenow",
    shortcut: ["tnow"],
        infocmd: "Show Live Time Of Pakistan",
        kingclass: "general commands",
          kingpath: __filename,
        use: '',
    },
    async(Void, citel, text) => {
try{
var sigma_time = new Date().toLocaleString('HI', { timeZone: global.timezone }).split(' ')[1]
var sigma_date = new Date().toLocaleDateString(get_localized_date)
var sigma_wish = ''
if (hrs < 12) sigma_wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅'
if (hrs >= 12 && hrs <= 16) sigma_wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞'
if (hrs >= 16 && hrs <= 20) sigma_wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥'
if (hrs >= 20 && hrs <= 24) sigma_wish = 'ʙᴇᴅ ᴛɪᴍᴇ 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const Zubair= [99,81,2023,2005,78,5000]
const king = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
    "orderMessage": {
       "itemCount" : Zubair[Math.floor(8*Math.random())],
       "status": 1,
       "surface" : 1,
       "message": `❏ ɢɴɪᴍᴇ\nᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ʙʏ ᴀsᴛʀᴏ`,
       "orderTitle": "alive",
       "sellerJid": '2348039607375@s.whatsapp.net' 
    }
  }
}

let Maher =`
╭────────────╮
│    *${sigma_wish}* 
│    *ᴛɪᴍᴇ* ⌚ ${sigma_time} ${am_pm}
│    *ᴅᴀᴛᴇ* 🗓️  ${sigma_date} 
╰────────────╯
`
return await Void.sendMessage(citel.chat, { text:Maher }, { quoted : king } )}
catch(e){citel.reply("*_Your Timezone Is Incorrect_*")}
})
//---------------------------------------------------------------

