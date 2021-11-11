cmd.on('example3',['speed','response'],['other'],async(req, res) => {
timestamp = functions.Speed();
latensi = functions.Speed(); - timestamp
return client.sendText(req.from, "Speed Response is "+latensi.toFixed(4)+" Second", req);
});

cmd.on('btnrespon',['carapenggunaan'],['info'],async(msg, res) => {
  txt = `_*Cara Penggunaan*_

• Untuk Command Yang Bertanda *<media>*
artinya kamu harus reply media dengan command tersebut, contoh : .sticker (media/ reply video/gambar)

• Untuk command yang bertanda *<sticker>*
artinya kamu harus reply sticker dengan command tersebut, contoh : .toimg (sticker/ reply sticker/sticker gif)

• Untuk command yang bertanda *<video>*
artinya kamu harus reply video dengan command tersebut, contoh : .tomp3 (video/ reply videonya)

• Untuk command yang bertanda *<image>*
artinya kamu harus reply gambar dengan command tersebut, contoh : .invert (image/ reply gambarnya)

• Untuk command yang bertanda *<audio>*
artinya kamu harus reply audio dengan command tersebut, contoh : .vibra (audio/ reply voice note/audio nya)

• Untuk command yang bertanda *<query>*
artinya kamu harus input teks/keyword untuk mencari sesuatu dengan bot, contoh : .pinterest (query/ query bisa kalian masukkan apa yang mau kalian cari atau teks/nama)`
buttons = [{buttonId:".menu", buttonText:{displayText:"Back To Menu"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on("ownerr",["ownerbot","owner"],["other"],async(msg,res) => {
  client.sendMessageFromContent(msg.from, {contactsArrayMessage: {
    "displayName": "Owner Bot",
    "contacts": [
    {
     "displayName": "Han",
     "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Zyy;;;\nFN:Hanz\nitem1.TEL;waid=6285731855426:6285731855426\nitem1.X-ABLabel:Owner Bot\nEND:VCARD"
    }
    ],
    }}, {quoted:msg})
    });

cmd.on('esenka',['snk'],["other"],async(msg, res) => {
  txxt = `Dengan menggunakan bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
  
- Bot tidak menyimpan data anda di server kami.
- Bot tidak bertanggung jawab atas Apa yang anda kirim ke lawan bicara anda.
- Bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/Zacros-Team/ZacrosBot
Base : https://github.com/Zobin33/Anu-wabot

Baileys WhatsApp library: https://github.com/adiwajshing/Baileys

Best regards, @${botinfo.ownerNumber[0]}.`
  client.reply(msg, txxt, {contextInfo:{mentionedJid:functions.parseMention(txxt)}})
});

cmd.on("donate",["donasi","donate"],["other"],async(msg, res) => {
  dmsg = `_*Donasi ${botinfo.botname}*_

*- For Owner* 
Pulsa : 085731855426
Gopay : 085807149213`
return await client.sendText(msg.from, dmsg, msg);
});

cmd.on("lapor",["report","laporkan"],["other"],async(msg, {query,client}) => {
  let tet = `*Laporan!*\n\n• Pengirim : @${msg.sender.jid.split("@")[0]}\n• Pesan : ${query}`
  await client.sendMessage(botinfo.ownerNumber[0]+`@s.whatsapp.net`, tet, "conversation", {contextInfo:{mentionedJid:functions.parseMention(tet)}});
  return client.sendText(msg.from, "Laporan Sudah Terkirim Ke Owner Ya Kak!", msg);
  },{query:"Mau Lapor Apa Kak?",param:functions.needed("query")});

cmd.on("tag",["mention","tag"],["other"],async(msg, {query, client}) => {
	return await client.sendMessage(msg.from, query+" tagged!", "conversation",{contextInfo:{mentionedJid: functions.parseMention("@"+query)},quoted:msg});
	},{query:"Masukan Nomor!\nEx : .mention @0",param:functions.needed("number")});

cmd.on('runtime',['runtime'],['other'],(msg,{client,prefix}) => {
let data = functions.count(process.uptime())
return client.sendText(msg.from,functions.parseResult(data,{title: 'Runtime Bot'}))
});

cmd.on('info',['info'],['other'],(msg,{client,prefix}) => {
let data = functions.count(process.uptime())
let total = 0
for (let a of cmd._events){
for (let b of a.command) total++
}
inmsg = `*Hai ${msg.sender.name} berikut adalah informasi bot*

Bot Name : HanBotz
Library : Baileys
Language : JavaScript
Total Command : ${total}
Runtime : ${data.day} Hari ${data.hours} Jam ${data.minutes} Menit ${data.seconds} Detik

Come join my group to discuss about bots or other
https://chat.whatsapp.com/FDnHRof3iIV1MfoW5vlMKQ

Special thanks to :
• myself`
let buttons = [{buttonId:".owner",buttonText:{displayText:"OWNER"},type:"RESPONSE"},{buttonId:".donasi",buttonText:{displayText:"DONASI"},type:"RESPONSE"}];
let btn = {
  contentText:inmsg,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage:btn});
});

cmd.on('delete',['del','delete'],['other'],async(msg,{client}) => {
if (!msg.quotedMsg.key.fromMe) return client.reply(msg,'harus dari bot')
client.deleteMessage(msg.from,msg.quotedMsg.key)
return client.reply(msg,'sukses')
},{quoted:true})
