all:
	npm run dev

bootstrap: 
	npm i
	npm run db:generate
	npm run db:migrate

lint check:
	npm run lint

fmt:
	npm run fmt

.env: .env.gpg
	@echo "Passphrase is (ask the developer)"
	/usr/bin/gpg -d $< > $@
