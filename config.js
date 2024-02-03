const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "918599565968"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '918590565968' 
global.devs = '918590565968';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhINEZVaVFMb2lad3dSdVk1WWRRUzRxNjZxU1ZWZFdsdEFoQkY4Vk9tTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFFQK1pvMWtBNVp6Y1VWTzNRM2d3S3EwMUZ2N3BhRjNpbUhJcTRCUUNrYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TTJrNGhVM09vNGh3RkN6NURjSHVUOGpoUjhGL3Job2twNVNQR1RGTG5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSTJwZW5reTE1NkdESy9ZVU5TUnRuZkc0SytOYllvTm9OYU90Z1JHcmh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGQjdJeTE3Q1duSlRzK0xlUURydnJkekRqczdFN0xqUmUzVVppL1FrWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ3cjZJUjRhaFVDZVIvZngzczBqOXBVaW5NaEo3RGVXWitjbHNrVzlieUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9pcWxCT3lUUWd0bEtyLzQxcVhJRTlHbGwvNHNMdGU2Z0hpZmEveFhsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWllVL3BoWGNJOU9rZXVaZWxrdkd5QlREY0ZNZGRYOEFFVzRqMHhMY0xpOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFuVUJSYkd0VnhxYk0wS1FnY1orUHU3NUZ5ZnhHamxvZC9oc0hqRzdBZTkzRkpmUE1MbUpoTFhGS2xzV1NTNm9Hbnc1V0hDMG5TNzNQUEU3Q29lMENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiI2cE5BSHFuVXFpZ2puMUE2ME9Fc1BDQ0tUWlZGK21qbTJJQ21JZXdNYmR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwMjE0MTk4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTRDMTY4MDY3OTUxQjE5QkNFMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA2OTc1NTI5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCM003c0h3c1RQVzFiNEw2M2tldW5RIiwicGhvbmVJZCI6ImU4OGFmZWUwLTVkNjktNDUwMy04MmU5LWM4MzQxZWMyZWYxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPLzBxQXlmdlZBY081UTdWME5Kdi9zZ2dFL2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFB6dld1dHdXMW1XeGh4K29oc3ZvVFJXUEJNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY3WDhEWVlNIiwibWUiOnsiaWQiOiI5OTQ0MDIxNDE5ODc6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUXVlZW4tQW55YV9WMiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZFbUlrSkVLWEMrYTBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWmx5M2YzS01iOHAyeCtKMEtVcWhPZjNIQ3dISjVJRk1uKzAyTTdXM29rUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2tKaThyV05CNzFRMFgrdUdjVWJRMHpKcTZyVWJBelZCb3VWc2lsTXRTaEZGRk8wdHYzTnZDRkZoclcrT0tOT0JTMk5QQ2ZnOHVqTHp3cy8zbXJvaHc9PSIsImRldmljZVNpZ25hdHVyZSI6Im1uS3N4NElDUUQyM2JiczJDK1dvblZ5OU5aZklWbW9wbU9qcXNXSU9kUk1seWd1WG43MCtjVGJYMVpnakxJNi8xdWhHTFZ0OUFHV0J4UTZmS3VxL0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk0NDAyMTQxOTg3OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldaY3QzOXlqRy9LZHNmaWRDbEtvVG45eHdzQnllU0JUSi90TmpPMXQ2SkUifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDY5NzU1MjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnpJIn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'prince ser',
  packname:  process.env.PACK_NAME || 'prince ser',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'muzzu' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
