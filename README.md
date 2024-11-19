## How to deploy

- `make env` will generate .env from .env.gpg. Use the passphrase sent to use
  via secure channel.
- `make bootstrap` should install all deps.
- `make` should launch the app.

## Notes

- Ran into very unfamilar concepts when using next/trpc: server and client side code is mixed in
  same app. Demarcating them properly was something very new to me.
- tRPC doens't support uploding image. There seems to be a experimental form-data API which I didn't
  use.
  - I read the image as base64 string and send it to server.
- Took a while to get familar with React syntax. Have used vue before so react looked very very
  different. Writing html in JS vs write JS in HTML different!

Daily logs: https://www.notion.so/dilawars/Astral-Take-Home-142e579bff8980f79cd4dfdc1f2afa3f?pvs=4
