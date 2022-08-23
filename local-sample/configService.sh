#
# Setup service
#

chmod +x /var/www/nodecron/local/*.sh

# Create service file
sudo cp /var/www/nodecron/sample/nodecronService.service /etc/systemd/system/

# Enable service start when machine boots.
# To disable, just change enable -> disable.
sudo systemctl enable nodecronService

# Reload services
sudo systemctl daemon-reload

# Start service
sudo systemctl restart nodecronService
sudo systemctl status nodecronService

echo "=> Created service /etc/systemd/system/nodecronService.service"
