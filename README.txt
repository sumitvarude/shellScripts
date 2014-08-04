shellScripts
============
Setup:-
  1. Clone the repo.
  2. Do "npm install" in dalekJSExamples folder.
  3. Do "npm install dalek-cli -g".
  
Requirements:-
  1. You should have Google Authenticator App on your phone/pc, configured with your tw account to generate the Google Authentication code.
  2. You can download it from following links
     for mac/windows
     -https://github.com/mclamp/JAuth/tree/master/Installers
     for android
     -https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en

Usage:-
  1. Open terminal/iterm  
  2. Go to project directory i.e. dalekJSExamples
  3. Run command "bash timeSheet.sh <username> <password> <Google Authentication Code>"
  
Limitations:-
  1. Until now, this script only works for STEP grads because it enters "STEP" in "Sub-Project".
  2. This script only enters 9 hours for each working day of the week.
  3. This script will only work for "People Support & Development" for Project/Assignment field.
  4. This script will only work for current week's timesheet, if your previous week's timesheet is due then it will not work.
  
Testing status:
  I have tested it on mac osx. I have to test it on windows.
