
const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'h3nric.aternos.me',
    port: 53452,
    username: 'henric24',
    version: '1.20.1'
  });

  bot.on('login', () => {
    console.log('✅ Bot logged in as henric24');
  });

  bot.on('end', () => {
    console.log('🔁 Disconnected... reconnecting in 5 seconds...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.error('❌ Bot error:', err);
  });

  bot.on('kicked', (reason) => {
    console.warn('⚠️ Bot was kicked:', reason);
  });
}

createBot();
