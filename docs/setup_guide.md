# Setup Guide

## Requirements
- Node.js ≥ 16 OR Python ≥ 3.9
- Ngrok (for public webhook URL)
- Vapi account access

## Steps
1. Clone the project.
2. Choose backend:
   - Node: `cd webhook/node && npm install && npm start`
   - Python: `cd webhook/python && pip install -r ../../requirements.txt && python webhook.py`
3. Run `ngrok http 3000`
4. Copy the public URL from ngrok.
5. Paste it in `vapi_assistant_config.json` → `"hooks.on_call_end.target"`.
6. Import that JSON config into the Vapi dashboard.
7. Assign a number → call → observe console logs and `call_logs.jsonl`.

