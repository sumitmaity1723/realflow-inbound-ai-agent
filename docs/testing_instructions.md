# Testing Instructions

1. Run the webhook server locally.
2. Expose it using `ngrok`.
3. Call the assigned Vapi number.
4. Speak like a real client.
5. Check your terminal for received data.
6. Verify new entry in `call_logs.jsonl`.
7. Test manually with:
```bash
curl -X POST https://<ngrok-id>.ngrok.io/webhook \
-H "Content-Type: application/json" \
-d @test_payload.json

