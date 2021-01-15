require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()




client.on('message' ,message =>{
    if(message.content === "ס"){
        message.react('🇰').then (r=>{
            message.react('🇾').then (r=>{
                message.react('🇸')
            })
        })
    }
})

client.on('ready', ()=>{
    console.log('Bot ready!')
})

client.login(process.env.BOT_TOKEN)