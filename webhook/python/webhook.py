from flask import Flask, request, jsonify
from datetime import datetime
import json, os

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        data = request.get_json()
        summary = {
            "received_at": datetime.utcnow().isoformat() + "Z",
            "assistant": data.get("assistant", "Realflow Inbound Agent"),
            "brokerage": data.get("brokerage_name", "Acme Brokerage"),
            "caller_name": data.get("caller_name"),
            "caller_role": data.get("caller_role"),
            "asset_description": data.get("asset_description"),
            "asset_location": data.get("asset_location"),
            "urgency": data.get("urgency"),
            "phone": data.get("phone"),
            "email": data.get("email"),
            "transcript_summary": data.get("transcript_summary")
        }

        with open('call_logs.jsonl', 'a') as f:
            f.write(json.dumps(summary) + '\n')

        print("Saved:", summary)
        return jsonify({"status": "ok"}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"status": "error", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=3000)

