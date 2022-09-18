# CronJob for Nodejs

Provide cron jobs intervally, periodcally.


## Quick start

- [1/2] Setup project

	```bash
	# Setup project
	./git-pull.sh

	# Install node_modules
	npm install

	# Create local folder
	cp -R local-sample local
	chmod +x ./local/*.sh

	# Create env file and Modify env to match with current env.
	cp .env.sample .env
	nano .env

	# Make cronjob batch file that be set at above step (for eg,. /var/www/nodecron/local/checkAndDeployServers.sh)
	# Note: this file must be owned by our service user (for eg,. ubuntu).
	nano ./local/deployServersIfNeed.sh
	```


- [2/2] Setup service

	```bash
	# Goto root of the project first !
	# Make env file to match with current env.
	cd setup
	cp .env.sample .env
	nano .env

	source setup.sh

	_CheckCurrentEnvInfo
	_CreateService
	_CompleteSetup
	```
