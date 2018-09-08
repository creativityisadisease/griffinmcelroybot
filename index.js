const discord = require("discord.js");
var client = new discord.Client();
const token = "[REDACTED]";

//setup

client.on("ready", () =>{
    console.log("ready");
    client.user.setActivity ("..you know ;)");
});

//commands (i write everything inside the same thing)

client.on("message", (message) => {
    //so it doesnt answer to bots
    if (message.author.bot) return;
  
  //so it's case insenitive
    msg = message.content.toLowerCase();
  
    //regular message command (i just copy and paste one after another)
    if(msg.startsWith ("vore")) {
      message.channel.send ("mmmm munchy munchy");
    }

    if(msg.startsWith ("press f")) {
      message.channel.send ("f");
    }

    
//to ban words
 const bannedWords = [
    "your words go here",
    "make sure you add a comma(not necessary in the last one)"
  ];
  
if(bannedWords.some(word => msg.includes(word))) {
  message.delete()
  message.reply("sentence for reply");
  
};

//randomizer
  
  const FUNNYPIC = [
    "griffin give me a funny pic",
    "griffin give me a funny picture"
    ];
  const FPREACTION = [
    "https://cdn.discordapp.com/attachments/482938976961953796/488036937689726987/bananavore.png",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036939761713164/download_1.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036941674053632/download_2.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036943511158826/download_3.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036945121902617/download_4.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036946841567236/download.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036949039251467/images_1.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036950712909869/images_2.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036953837666305/images.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488036955246952449/tumblr_p3qtzn680O1wu41tmo1_250.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488037027603021895/tumblr_p20cr0w8JN1wu41tmo1_400.jpg",
    "https://cdn.discordapp.com/attachments/482938976961953796/488037030794756096/tumblr_pc3jjmgvlk1wu41tmo1_400.png",
    "https://cdn.discordapp.com/attachments/482938976961953796/488037032610889729/vorebanana.jpg"
  ];

  if(FUNNYPIC.some(word => msg.includes(word))) {
    var response = FPREACTION [Math.floor(Math.random() * FPREACTION.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;

  const BANANA = [
    "banana",
    "vore"
    ];
  const VORE = [
    "mmm munchy munchy",
    "nomnomnomnomnom",
    ":hehehe:",
    ":uh_oh_spaghettios:",
    ":shhh:",
    "CHOMP",
    "c ronc h ;)c"
  ];

  if(BANANA.some(word => msg.includes(word))) {
    var response = VORE [Math.floor(Math.random() * VORE.length)];
    
    message.channel.send(response).then().catch(console.error);
  } else;

});

client.login(token);