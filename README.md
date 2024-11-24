## A Math Tutor

Upload a screenshot of math problem and let OpenAI solve it for you -- step by
step. 

## Sequence Diagram

![Sequence diagram](https://kroki.subcom.tech/plantuml/svg/eNqFkMFOwzAMhu95Cr8A44I49ICGJiGVA6267cZhprFo1jaObFfl8Uk2xMSJQyLF___b_rJVQ7FlnpyOIYKwkku5EvqQMBoclcS5csPd0-VVwW4K_QjtwMbAAoYjgfZCFDXXbua6gmOaGP0ftS7aoWt3FewpevhApccHoNizJ_8eIcz4SZB7nxKrbWwxlpMriZJsEsXn-t9sE7OtraGcNdgASXhO5q7x2wod2SKZmzRxVAJUeN03b7_jCsQLy4rirya9tM8UPyTF0OVdMvOMMnpe4_2MNpzxyzm3zUr-3G-VSHai)

## How to deploy

- Get your OpenAI key.  Add to .env file.
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

# Samples

![image](https://github.com/user-attachments/assets/f742c5e3-96e8-4121-8625-f13382bd40c2)
