# Microfrontends demo application
As a part of this demo we have created three diffrent applications and they are working on diffrent ports as below
1. components (This is first remote/child application and will run on port 3001)
2. to-do-list (This is second remote/child application and will run on port 3002)
3. Vue-app (This is third remote/child application created in vue.js and will run on port 3003).
4. Js-app (This is fourth remote/child application created in vanilla js and will run on port 3004)
5. MFApp (This is micro frontends host application and will run on port 3000).

We are using components from both the remotes applications in host application.

## Steps to run
1. First go to components folder, do npm install and then npm start (App will open in port 3001).
2. Now go to to-do-list folder in another tab and do npm install and then npm start (App will open in port 3002).
3. Now go to vue-app folder in another tab and do npm install and then npm start (App will open in port 3003).
4. Now go to Js-app folder in another tab and do npm install and then npm start (App will open in port 3004).
5. Now go to MFApp folder in third tab and do npm install and then npm start (App will open in port 3000).
6. You will see components from all four child applications are used in host application.

### Demo link urls
1. https://youtu.be/qkaTFb7mOb4?feature=shared
2. https://youtu.be/bBm6D3R7NN8?feature=shared
3. https://youtu.be/je2aZqDi1AI?feature=shared
