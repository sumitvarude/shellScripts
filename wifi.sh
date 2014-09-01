CURRENT_DEVICE=$(networksetup -listallhardwareports | awk '$3=="Wi-Fi" {getline; print $2}')
echo "Current Wi-Fi Device = '$CURRENT_DEVICE'"
networksetup -setairportpower $CURRENT_DEVICE "$1"
if [ "$1" = "on" ]
then
    echo "Wifi is ON now"
    sleep 5
    bash ~/Documents/shellScripts/start.sh
else
    echo "Closing firefox"
    sleep 1
    pkill -f firefox
    echo "wifi is OFF now"
fi
