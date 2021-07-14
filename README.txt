This script will be useful for WebGroup developers who work with MIDC and need to run RxApp inside of it locally

Script operates on 4 related projects MIDC -> RxAppSdk -> RxApp -> PatientApp and allows you to 
- Opent IDE for each project
- Run npm install and start each project

There is no rocket since in doing it, but it just saves time in case of PC reloading ^^

Script has no external dependencies and uses only pure Node.JS
So to run it you should just navigate to it's location and type in the terminal 'node main.js'

Node local server (localhost which is started by 'npm run start') for each project will be handled 
by sub-process of this script so if you stop the script it will close all of the related servers

You can adjust the script to you needs using config.json file

I'm not going to harm you or steal your data :)
That's one of the reasons all the code is not compiled and uses pure JS
So you can check it any time in case of doubt 