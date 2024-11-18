all:
	npm run dev

bootstrap: .env
	npm i

.env: .env.gpg
	@echo "Passphrase is (ask the developer)"
	/usr/bin/gpg -d $< -o $@
