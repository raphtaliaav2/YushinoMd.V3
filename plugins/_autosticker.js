import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: '𝑨𝒍𝒅𝒊 𝑿 𝑨𝒊𝒔𝒚𝒂𝒉', 
    title: 'Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
    throw stiker.toString()
   
}

handler.customPrefix = /^(hu|huu|kntl|anj|mmk|halo|hai|hallo|haloo|ohayo|ajg|kamu nanya|kamu nanya?|huuu|huuuu|huuuuu|ok|oke|ook|okee|okk|nice|nis|p|bot)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://i.ibb.co/qF3Mxsx/thumbnail.jpg",//windah bocil
 "https://telegra.ph/file/d5100b4ce95a0012e88c1.png",//patrick bawa minum
 "https://i.ibb.co/8s7vG4t/4db6021d1a597f483040f5916038129a.jpg",//pak polisi pap tt
 "https://i.ibb.co/yWd0qbY/4d2d12933d380043be8d4e75ea0c60f0.jpg",//kucing1
 "https://i.ibb.co/5Fm1GHk/85ab6ca3b9d0c84dfbe83c30c31e1620.jpg",//mazowski monster inc
 "https://i.ibb.co/5Fm1GHk/85ab6ca3b9d0c84dfbe83c30c31e1620.jpg",//wkwk
 "https://i.ibb.co/McVVYkD/902e95f8c07104201fbf578d9359f9f5.jpg",//kucing2
 "https://i.ibb.co/LpqCHjw/f10f327fa500f4f75523dea7452b7214.jpg",//hengker
 "https://i.ibb.co/zGQXLpg/2d5f801edc2d9044a8cff79133f80f5c.jpg",//bapak bapak lovee
 "https://i.ibb.co/Gkkv8xC/9a265b43ed443e88a8c8a0ff80a7365f.jpg"//hengker2
]
