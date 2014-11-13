history -c
echo "plz enter username:"
read username
echo "plz enter password:"
read -s password
echo "plz enter google authentication code:"
read code
if [ $1 == "-c" ] && [[ $2 =~ ^-?[0-9]+$ ]]
then
	echo "given hours : "$2;
	dalek fill_timesheet_with_same_hours_for_every_day.js -b chrome $username $password $code $2
fi
if [ $1 == "-s" ]
then
	echo "enter working hours"
	read hours; 
	dalek fill_timesheet_with_specific_hours_for_each_day.js -b chrome $username $password $code ${hours}
fi