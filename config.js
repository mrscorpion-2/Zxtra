
export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ""; // bot telegram token

export const REDIRECT_BOT = "" // a redirect bot when the bot is full

export const OWNER_ID = process.env.OWNER_ID || ""; // owner id

export const LIMIT = 30; //number of max sessions for the tele bot

export const MODE = "Default"; // Your access key to run this bot

export const PUB = true; // Is it a private or public bot 

export const OWNER_NAME = "𝙻𝚆𝙰𝚉𝙸" // Your Dev username

export const OWNER_NUM = process.env.OWNER_NUM || "27736324314"; // Your number

export const OWNER_TELEGRAM = process.env.OWNER_TELEGRAM || ""; // Your telegram username

export const BOT_NAME = "𝚁𝙸𝙿𝙿𝙴𝚁 𝚇-𝙼𝙳" // Bot name

export const TELEGRAM_CHANNEL = process.env.TELEGRAM_CHANNEL || "@lwazi_z"; // Your telegram channel name

export const TELEGRAM_GROUP = process.env.TELEGRAM_GROUP || "@legacy_gang"; // Your telegram group name

export const WA_CHANNEL = process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbDK7drI1rcoEQNE1K3S"; // WhatsApp channel URL

// WhatsApp Newsletter/Channel JID used by autoJoin.js.
// Kept in a dedicated internal module so the Channel ID is not exposed here
// and cannot be overridden accidentally by an environment variable.
export { WA_CHANNEL_ID } from './utils/channelConfig.js';


