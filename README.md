![](https://private-user-images.githubusercontent.com/895681/387901319-8ab61460-f9f7-4f30-9151-f5d9cccc0a77.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzIwNjkxNTYsIm5iZiI6MTczMjA2ODg1NiwicGF0aCI6Ii84OTU2ODEvMzg3OTAxMzE5LThhYjYxNDYwLWY5ZjctNGYzMC05MTUxLWY1ZDljY2NjMGE3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyMFQwMjE0MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYzc4Mzg4MzU0MTE0ODBlYTM2YjJjNTE1Y2UzOTM4NTIwZTAyMTRjNzBlZDI2NGI4MjM4YTIzOTY4N2QwOWFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.JkN3DT0WQfPzyr9ymmKgT01MnJcvB8tP3-VNda5NjyM)


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
