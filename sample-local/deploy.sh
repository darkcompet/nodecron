# Stop service to release resources
sudo systemctl stop nodecronService
echo "[Info] nodecronService was stopped."

# Pull
cd /var/www/nodecron
./git-pull.sh

# Copy settings after pull
cp .env.sample .env

# Start service and View log
sudo systemctl start nodecronService
echo "[Info] nodecronService was started."
