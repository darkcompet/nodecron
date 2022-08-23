# Check/Import env file
if [[ ! -f ".env" ]]; then
	echo "File .env does not exist !"
	echo "Please create it by running: cp .env.sample .env"
	exit
fi

source .env


_CheckCurrentEnvInfo() {
	echo "Current env info:"
	echo "ENV: ${ENV}"
	echo "BRANCH: ${BRANCH}"
}

_CreateService() {
	cd ${PROJ_ROOT_DIR_PATH}/setup

	# Create service file
	sudo cp ./${SERVICE_IDENTIFIER}.service /etc/systemd/system/

	# Enable service start when machine boots.
	# To disable, just change enable -> disable.
	sudo systemctl enable ${SERVICE_IDENTIFIER}

	# Reload services
	sudo systemctl daemon-reload

	# Start service
	# sudo systemctl restart ${SERVICE_IDENTIFIER}
	# sudo systemctl status ${SERVICE_IDENTIFIER}

	echo "=> Created service /etc/systemd/system/${SERVICE_IDENTIFIER}.service"
}

_CompleteSetup() {
	git branch

	echo "=> Congratulation ! Please follow below steps before start server:"
	echo "- Confirm current branch is matching with current env (${ENV})?"
	echo "- Modify setting to match with current env: nano .env"
	echo "- Deploy server: ./local/deploy.sh"
	echo "- Check service status: sudo systemctl status ${SERVICE_IDENTIFIER}"
	echo "- Check service log: journalctl --unit=${SERVICE_IDENTIFIER} --follow"

	cd ${PROJ_ROOT_DIR_PATH}
}
