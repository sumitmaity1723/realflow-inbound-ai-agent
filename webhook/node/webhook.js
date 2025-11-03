const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const dotenv = require('dotenv');
const { logToFile } = require('./utils/logger');
dotenv.config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.post('/webhook', async (req, res) => {
  try {
    const data = req.body;

    const summary = {
      received_at: new Date().toISOString(),
      assistant: data.assistant || "Realflow Inbound Agent",
      brokerage: data.brokerage_name || "Acme Brokerage",
      caller_name: data.caller_name || null,
      caller_role: data.caller_role || null,
      asset_description: data.asset_description || null,
      asset_location: data.asset_location || null,
      urgency: data.urgency || null,
      phone: data.phone || null,
      email: data.email || null,
      transcript_summary: data.transcript_summary || null
    };

    await logToFile(summary);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(500).json({ status: "error", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Webhook running on port ${PORT}`));

