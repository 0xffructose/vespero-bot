# 🌌 Vespero – Multi-purpose Discord Bot

<p align="center">
  <img src="https://img.shields.io/badge/Discord-Bot-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
  <img src="https://img.shields.io/github/license/0xffructose/vespero-bot?style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/0xffructose/vespero-bot?style=for-the-badge"/>
  <img src="https://img.shields.io/github/forks/0xffructose/vespero-bot?style=for-the-badge"/>
</p>

---

## ✨ Features
- ⚡ **Fast & Reliable**: Built on Discord.js v14  
- 🎵 **Music Commands**: YouTube, Spotify support  
- 🛡 **Moderation**: Kick, ban, mute, auto-role management  
- 🎉 **Fun**: Games, jokes, random content  
- 📊 **Server Management**: Logging system, auto-messages, polls  
- 🔧 **Easy Customization**: Configure easily via `.env`  

---

## 🚀 Installation

### Requirements
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Discord Bot Token ([Discord Developer Portal](https://discord.com/developers/applications))

### Steps
```bash
# Clone the repository
git clone https://github.com/0xffructose/vespero-bot.git

# Enter the folder
cd vespero-bot

# Install dependencies
npm install

# Create and configure .env file
cp .env.example .env

# Start the bot
npm start
```

---

## ⚙️ Configuration (`.env`)
```env
DISCORD_TOKEN=your-bot-token
CLIENT_ID=bot-client-id
GUILD_ID=test-server-id
```

---

## 📂 Project Structure
```
vespero-bot/
├── commands/       # Command files
├── events/         # Event listeners
├── utils/          # Helper functions
├── index.js        # Bot entry point
├── package.json
└── .env.example
```

---

## 🖼 Example Commands
```
/play [song name/url]  → Plays music
/ban @user             → Bans a user
/meme                  → Sends a random meme
/poll "Question" "A" "B" → Creates a poll
```

---

## 🤝 Contributing
Contributions are always welcome!  
1. Fork this project  
2. Create a new branch (`git checkout -b feature/new-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push the branch (`git push origin feature/new-feature`)  
5. Open a Pull Request 🎉  

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

<p align="center">🚀 Empower your Discord server with Vespero!</p>  