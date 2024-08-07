# CronJob for Nodejs

Provide cron jobs intervally, periodcally.


## Make project

- Install nodejs if not exist (local & server)

	```bash
	# Install nvm (node version management)
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

	# Install and Use node with specific version
	# Note: 18 means we use latest version, for eg,. 18.2.0
	# After installed, should reload terminal (for eg,. by exit and re-enter to server)
	nvm install 18

	# Create symbol link to our installed node, npm
	sudo ln -s "$(which node)" /usr/bin/node
	sudo ln -s "$(which npm)" /usr/bin/npm

	# Check versions
	node -v
	npm -v

	# [Optional] To switch nodejs version, just use
	nvm use 18
	```

- Create nodejs server project (local)

	```bash
	# Create empty project and init git, add editorconfig,...
	mkdir nodecron && cd nodecron
	git init

	# Add libs
	mkdir -p tool/compet && cd tool/compet
	git submodule add https://github.com/darkcompet/shell-ubuntu.git
	cd ../..

	# Create project with express generator
	# Ref: https://expressjs.com/en/starter/generator.html
	npx express-generator
	npm install

	# To work with each env, we install dotenv
	# Ref: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
	npm install dotenv --save

	# For http request (use v2 to use with require function in nodejs)
	npm install @types/node-fetch --save

	# [Option] Auto reload server when changes
	# But it is not needed in typescript??
	npm install nodemon --save-dev

	# Setup typescript to work with [nodejs + express].
	# Note that: compiler will convert our ts code to js at development stage to build folder.
	# Ref: https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/
	npm install typescript ts-node @types/node @types/express --save-dev
	npx tsc --init

	# Cronjob
	# npm install @types/node-cron --save
	npm install node-cron --save

	# Start server, then browser to http://localhost:8300
	npm start
	```
