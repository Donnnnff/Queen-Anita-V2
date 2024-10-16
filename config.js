//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "oui";
global.video = "oui";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "oui";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "oui";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "50935036730";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURpYXBDdkVmdXdxd3ovakZYYlM3aEdnd2tNOVJKZ0MrYTdXWDF0eHBVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkFYd2dLVVU2YWl6Y0JVTzhzMEw4eld1TTQrZU9yZnQzQUZBSlNCclZGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSkowOEpJR2tnRmc2TCtWRXo1ZzdWZnNGenBXY0hRUjVpdDVCZXlYaVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZb0E5b1BuK283NFpXODh5N2ZWc3FXU3hXc3RZb3pLd0JvSnNhWlF3SmxZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllEUFQxemJsWFcyZmlyTmhGNTFGMWRMMkRmeW1wVnQ0L1hodDNzN3cybHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklhZElrZExLdFpwR2kzcnBsUGlnWVBoZ3FXUzV1Q3NIbHpzRmNldVZQZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VoNU1sVFZEZ2szREVjWHI0RzVRU2Q4ZE56NXpMZDUxbmlqbGxvYjkwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGQrZFlXZkhyeWhPQ2E5clZGNm9QdUFaTlE5MXlGTDI1djI2bGFhb01sUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpSQ1V3aHpuRGl5ME5PZnlHK0JHdExBUEtJR1Rwc0lqd1FkWm0vN1A3Q2E2czFUMVBYb2kyKzVBSUZ3K2FETHF0WDROTWtkWjJDRXVwVUErWjJNMmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6InQ0U3lpSkVnUGI3Y2tnYUFLSUVrcDVVbXdSUTk5aTdnQzJuSjJUeXVNV2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJELVFKWlU0UTRlVTNsckxweW02RXciLCJwaG9uZUlkIjoiZWExMmNlYTEtM2Q1OS00ZGRhLThjZmUtM2VlNzUwMDU3NzcxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVvdmN5MndGaVkxYmh0Tm81WUI4dUZZalJ5az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUGFPQlc0VTlXVjhGMW5OSWE5NklwY1lZc0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjc2MVQ4QlkiLCJtZSI6eyJpZCI6IjUwOTM1MDM2NzMwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSU5GSU5JVE8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00vOW02c0RFSzJhd2JnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFmV3pwUGpKcUxGZ1kwWEh6R25HczgxcGQweWliLzg5eEhPV3VUc1plU1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkczMWY3ekxqTC81NVdVRUx4bDNKMnZIWU5udE0xVExhT0FuUDd5RW05TEh6M2VZS0xNcS9QWlhqNndNYW50VUZkUmpXQmdDSjdhREdCTWRrTE9oUEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkVkx3Yi9YSFpQc2xmSW5XU24rL3J0bGVjZlFUUFRiUkVBV2thZFRBV0lDVzRYR1EydmJVYW52c2YrNGUwTjdVdUcvTDdXZUE4M2Vjckw0Ri9IV1FnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM1MDM2NzMwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUgxczZUNHlhaXhZR05GeDh4cHhyUE5hWGRNb20vL1BjUnpscms3R1hrbSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTEyMTU5N30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "",
  author: process.env.PACK_AUTHER || ",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "",
  ownername: process.env.OWNER_NAME || "",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
