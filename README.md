# CronJob for Nodejs

Provide cron jobs intervally, periodcally.


## Quick start

- Setup project

```bash
	# Pull project
	./git-pull.sh

	# Required node installed first !
	# Install node_modules
	npm install

	# Create local folder
	cp -R sample-local local
	chmod +x ./local/*.sh

	# Create env file and Modify env to match with current env.
	cp .env.sample .env
	nano .env

	# Make cronjob batch file that be set at above step (for eg,. /var/www/nodecron/local/checkAndDeployServers.sh)
	# Note: this file must be owned by our service user (for eg,. ubuntu).
	nano ./local/deployServersIfNeed.sh

	# Setup service
	# Goto root of the project first !
	# Make env file to match with current env.
	cd ./setup
	cp .env.sample .env

	source setup.sh

	_CreateService
	_CompleteSetup
```
