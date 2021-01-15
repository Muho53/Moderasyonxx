const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["794938670234075156"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "794881102308573184"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:795256719671558174>`,
'1': `<a:1_:795233524927168512>`,
'2': `<a:2_:795233531801763840>`,
'3': `<a:3_:795233382828474368>`,
'4': `<a:4_:795233531613020171>`,                       
'5': `<a:5_:795233531986575360>`,
'6': `<a:6_:795233382896107531>`,
'7': `<a:7_:795233387006656532>`,
'8': `<a:8_:795233383512801280>`,
'9': `<a:9_:795233471794118677>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:795256719671558174>`,
'1': `<a:1_:795233524927168512>`,
'2': `<a:2_:795233531801763840>`,
'3': `<a:3_:795233382828474368>`,
'4': `<a:4_:795233531613020171>`,                       
'5': `<a:5_:795233531986575360>`,
'6': `<a:6_:795233382896107531>`,
'7': `<a:7_:795233387006656532>`,
'8': `<a:8_:795233383512801280>`,
'9': `<a:9_:795233471794118677>`}[d];})}

var taglılar = 0;
let tag = "❖";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:795256719671558174>`,
'1': `<a:1_:795233524927168512>`,
'2': `<a:2_:795233531801763840>`,
'3': `<a:3_:795233382828474368>`,
'4': `<a:4_:795233531613020171>`,                       
'5': `<a:5_:795233531986575360>`,
'6': `<a:6_:795233382896107531>`,
'7': `<a:7_:795233387006656532>`,
'8': `<a:8_:795233383512801280>`,
'9': `<a:9_:795233471794118677> `}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:795256719671558174>`,
'1': `<a:1_:795233524927168512>`,
'2': `<a:2_:795233531801763840>`,
'3': `<a:3_:795233382828474368>`,
'4': `<a:4_:795233531613020171>`,                       
'5': `<a:5_:795233531986575360>`,
'6': `<a:6_:795233382896107531>`,
'7': `<a:7_:795233387006656532>`,
'8': `<a:8_:795233383512801280>`,
'9': `<a:9_:795233471794118677>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("795590458235027456").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:795256719671558174>`,
'1': `<a:1_:795233524927168512>`,
'2': `<a:2_:795233531801763840>`,
'3': `<a:3_:795233382828474368>`,
'4': `<a:4_:795233531613020171>`,                       
'5': `<a:5_:795233531986575360>`,
'6': `<a:6_:795233382896107531>`,
'7': `<a:7_:795233387006656532>`,
'8': `<a:8_:795233383512801280>`,
'9': `<a:9_:795233471794118677>`}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}