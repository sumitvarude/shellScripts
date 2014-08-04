shellScripts
============
Setup:-
  1. CLone the repo.
  2. Do "npm install" in dalekJSExamples folder.
  3. Do "npm install dalek-cli -g".

Usage:-
  1. Open terminal/iterm  
  2. Go to project directory i.e. dalekJSExamples
  3. Run command "bash timeSheet.sh <username> <password> <Google Authentication Code>"
  
Requirements:-
  1. You should have google authenticator app on your phone/pc, configured with your account your tw account 
  to generate the Google authentication code.
  2. You can download it from following links
     for mac/windows
     -https://github.com/mclamp/JAuth/tree/master/Installers
     for android
     -https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en
     
Limitations:-
  1. Until now, this script only works for STEP grads because it enters "STEP" in "Sub-Project".
  2. This script only enters 9 hours for each working day of the week.
  3. This script will only work for "People Support & Development" for Project/Assignment field.
