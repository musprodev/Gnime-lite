const { dare, truth, random_question ,name } = require('../lib/truth-dare.js')
const axios = require('axios')
const { Module_Exports,sleep } = require('../lib')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "question",
            infocmd: "Random Question.",
            kingclass: "pastime commands",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "truth",
            infocmd: "truth and dare(truth game.).",
            kingclass: "pastime commands",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "dirtydare",
            infocmd: "truth and dare(dare game.).",
            kingclass: "pastime commands",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
//--------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke",
            infocmd: "Sends Joke in chat.",
            kingclass: "pastime commands",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 

const response =await  fetch('https://official-joke-api.appspot.com/random_joke');
  const joke= await response.json();
citel.reply( `*𝙹𝙾𝙺𝙴:* ${joke.setup}\n*𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:*  ${joke.punchline}`);

})
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke2",
            infocmd: "Sends Joke in chat.",
            kingclass: "pastime commands",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 
 
         fetch('https://v2.jokeapi.dev/joke/Any?type=single')
         .then(response => response.json())
         .then(data => {
         citel.reply(`*𝙹𝙾𝙺𝙴:* ${data.joke}`); 
  })
  .catch(error => {
     return citel.reply ('Error fetching joke:' + error);
  });
        }
    )

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fact",
        infocmd: "Sends fact in chat.",
        kingclass: "pastime commands",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*𝙵𝙰𝙲𝚃:* ${data.fact}`)   
    }

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "quotes",
        infocmd: "Sends quotes in chat.",
        kingclass: "pastime commands",
        kingpath: __filename,
    },
    async(Void, man, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
┏━━↱ ${mztit} ↰━▢
➮ *𝙲𝙾𝙽𝚃𝙴𝙽𝚃* ${quoo.data.quote.body}
➮ *ᴀᴜᴛʜᴏʀ* ${quoo.data.quote.author}  
┗━━━━━━━━━━▢ `
return man.reply(replyf)
    }
 
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "define",
        infocmd: "urban dictionary.",
        kingclass: "pastime commands",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            *𝚆𝙾𝚁𝙳:* ${text}
            *𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽:* ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            *𝙴𝚇𝙰𝙼𝙿𝙻𝙴:* ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
//------------------------------------------------------------------------

Module_Exports({
   kingcmd: "rizz",
   infocmd: "Random pickup line",
   kingclass: "pastime commands",
   kingpath: __filename
  },
  async (Void, citel) => {
    try {
      let response = await axios.get('https://vinuxd.vercel.app/api/pickup');
      let data = response.data;
  
      if (!data || !data.pickup) {
        return citel.reply('Unable to retrieve a pickup line. Please try again later.');
      }
  
      let pickupLine = data.pickup;
  
      return citel.reply(`*Pickup Line:* ${pickupLine}`);
    } catch (error) {
      citel.reply(`Error: ${error.message || error}`);
    }
  });
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "insult",
   infocmd: "insult cmd",
   kingclass: "pastime commands",
   kingpath: __filename
  },
  async (Void, citel) => {
    try {
      let response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
      let data = response.data;
  
      if (!data || !data.insult) {
        return citel.reply('Unable to retrieve an insult. Please try again later.');
      }
  
      let insult = data.insult;
      return citel.reply(`*Insult:* ${insult}`);
    } catch (error) {
      citel.reply(`Error: ${error.message || error}`);
    }
  });
//----------------------------------------------------------------
Module_Exports({

            kingcmd: "hack",

            kingclass: "pastime commands",

            infocmd: "hacking prank",

            use: ' ',

            kingpath: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```Injecting malware \n 0%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ 10%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ 20%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("```System hyjacking on process.. \n Conecting to Server error to find 404 ```")

await sleep(1000)

citel.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

citel.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

citel.reply("``` HACKING COMPLETED ```")

await sleep(1000)

citel.reply("``` SENDING LOG DOCUMENTS...```")

await sleep(1000)

citel.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected```")

await sleep(1000)

            return citel.reply('*BACKLOGS CLEARED*');

        }

    )


const {Module_Exports} = require('../lib');
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    function getRandomStartingLetter() {
      const randomIndex = Math.floor(Math.random() * allLetters.length);
      return allLetters[randomIndex];
    }
    
    
    const wcgData = {
      isGameActive: false,
      countdownSeconds: 44,
      players: [],
      currentTurn: null,
      currentCriteria: { startingLetter: getRandomStartingLetter(), minLetters: 3 },
      totalWords: 0,
    };
    
    Module_Exports({
     kingcmd: "startwcg",
     kinginfo: "wcg game",
     kingclass: "pastime commands",
    }, async (Void, citel) => {
      if (wcgData.isGameActive) {
        return citel.reply('A Word Chain Game is already in progress.');
      }
    
      wcgData.isGameActive = true;
      wcgData.players = [];
      wcgData.currentTurn = null;
      wcgData.totalWords = 0;
    
      setTimeout(() => {
        wcgData.currentTurn = getRandomPlayer();
        citel.reply(`👾 wcg starts in ${wcgData.countdownSeconds} seconds ⏳\nType *enter* to play 🙋‍♂️🙋‍♀️\n🧩 🗿\n\n👥 ${wcgData.players.length} players joined.`);
        startNextTurn(citel);
      }, wcgData.countdownSeconds * 1000);
    });
    
    function getRandomPlayer() {
      const randomIndex = Math.floor(Math.random() * wcgData.players.length);
      return wcgData.players[randomIndex];
    }
    
    function getRandomStartingLetter() {
      const randomIndex = Math.floor(Math.random() * allLetters.length);
      return allLetters[randomIndex];
    }
    
    function startNextTurn(citel) {
      wcgData.currentTurn = getRandomPlayer();
      wcgData.currentCriteria = { startingLetter: getRandomStartingLetter(), minLetters: 3 };
      wcgData.totalWords = 0;
    
      citel.reply(`🌀Turn : ${wcgData.currentTurn}\n⏭Next : @user${wcgData.currentTurn}@user\n🈴Your word must start with *${wcgData.currentCriteria.startingLetter}* and include at least *${wcgData.currentCriteria.minLetters}* letters\n🤾Players remaining : ${wcgData.players.length}/${wcgData.players.length}\n⏳You have *40s* to answer\n📝Total words : ${wcgData.totalWords}`);
    }
    
    
    Module_Exports({
      on: 'text',
      pattern: 'enter',
    }, async (Void, citel, text, { from }) => {
      if (!wcgData.isGameActive) {
        return;
      }
    
      if (wcgData.players.includes(from)) {
        return;
      }
    
      wcgData.players.push(from);
      citel.reply(`@⁨${from}⁩ Joined 👏`);
    });
    
    Module_Exports({
      on: 'text',
      pattern: '',
    }, async (Void, citel, text, { from }) => {
      if (!wcgData.isGameActive || from !== wcgData.currentTurn) {
        return;
      }
    
      const submittedWord = text.trim();
    
      if (!isValidWord(submittedWord)) {
        return;
      }
    
      wcgData.totalWords++;
      citel.reply('✅');
      startNextTurn();
    });
    
    function isValidWord(word) {
      const { startingLetter, minLetters } = wcgData.currentCriteria;
      return word.startsWith(startingLetter) && word.length >= minLetters;
    }
///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////