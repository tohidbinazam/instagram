## How to run this project?

`Recommended terminal: git bash`

### 1. Download this project or command with git clone
```HTML
git clone https://github.com/tohidbinazam/instagram.git
```
Note: Copy any code and just right-click on the mouse in your terminal,  
Result: Auto past it.

### 2. Open the terminal in the project root folder 'Instagram' and run those commands
```HTML
npm install
cd client
npm install
```
and 👇
```HTML
cd ..
```

### 3. In the project root folder create a file, named '.env' by using this command
```HTML
touch .env
 ```

### 4. Open the .env file by 1st command, past the bellow codes, and update with those variables
```HTML
start .env
 ```

```HTML
SERVER_NAME = Instagram
SEVER_PORT = 5050
APP_MOOD = Development
APP_URL = http://localhost:3000
MONGO_STRING = ``Hear is your MongoDB database string``
SECRET_KEY = ``JWT secret key``
SENDGRID_API_KEY = `Create SendGrid account or knock me on messenger`
 ```
Use SendGrid or use by default Gmail service

Note: [Tohid Bin Azam](https://www.facebook.com/tohidbinazam/) Fb account you knock from here

### 5. In the Root folder terminal past this final code
```HTML
npm start
 ```

If everything is ok,
Runs the app in the development mode. Automatically open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


