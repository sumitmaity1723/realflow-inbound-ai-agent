const fs = require('fs').promises;

async function logToFile(data) {
  const line = JSON.stringify(data) + '\n';
  await fs.appendFile('call_logs.jsonl', line);
  console.log("Saved:", data);
}

module.exports = { logToFile };

