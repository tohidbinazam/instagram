## How to run this project ?

`Recommended terminal: git bash`

### 1. Download this project or command with git clone
```html
git clone https://github.com/tohidbinazam/instagram.git
```
Note: Copy any code and just right click on mouse in your terminal,  
Result: Auto past it.

### 2. Open terminal in project root folder and run this command
```html
npm install
cd client
npm install
cd ..
```

### 3. In project root folder create a file, name '.env' by using this command
```html
touch .env
 ```

### 4. Open .env file by 1st command, past the bellow codes and update those info
```html
start .env
 ```

```html
SERVER_NAME = Instagram
SEVER_PORT = 5050
APP_MOOD = Development
MONGO_STRING = ``Hear is your MongoDB database string``
SECRET_KEY = ``JWT secret key``
SENDGRID_API_KEY = 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
 ```

### 5. In Root folder terminal past this final code
```html
npm start
 ```

If everything is ok,
Runs the app in the development mode. Automatically open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


