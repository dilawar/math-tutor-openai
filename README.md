![](https://private-user-images.githubusercontent.com/895681/387902480-48e24c45-37d7-43c1-9ef4-d59a49c976d5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzIwNjk1MDYsIm5iZiI6MTczMjA2OTIwNiwicGF0aCI6Ii84OTU2ODEvMzg3OTAyNDgwLTQ4ZTI0YzQ1LTM3ZDctNDNjMS05ZWY0LWQ1OWE0OWM5NzZkNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyMFQwMjIwMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYWMwMmNhMTk4ODg3N2NiMDdiNzMyZWY2OWE2ZWVlMjkyYjBiMWExOGQzZjNmOTFkMmM2ZmRhNTcyNTBiZTdhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.C8PvSQUKMiwSILtBdF8wTMP9c754SRe7Ib-cg3VEfKY)


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
