# CronJob for Nodejs

Provide cron jobs intervally, periodcally.


## Quick start

- Run

	```bash
	# Pull code
	./git-pull.sh

	# Make cronjob batch file `/var/www/checkAndDeployServers.sh`
	# Then set the file owner as your user (ubuntu).
	touch /var/www/checkAndDeployServers.sh
	sudo chown ubuntu:ubuntu /var/www/checkAndDeployServers.sh
	nano /var/www/checkAndDeployServers.sh

	# Create local folder
	cp local-sample local

	# Install modules
	npm install

	# Deploy server
	./local/deploy.sh
	```
