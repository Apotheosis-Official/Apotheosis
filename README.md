
### [Offical Docs](https://disnodeteam.com/docs/)

### Getting Started:

#### Installing
`npm install disnode --save && npm install`
##### Bot Config
Make a file called BotConfig.json and fill it in with your bots information
```json
  {
  "key": "Bot Token Here",
     "prefix" : "Bot Prefix",
  "db": {
     "use_db" : false,
     "auth" : false,
     "user" : "",
     "pass" : "",
     "host" : "",
     "port" : "",
     "DBName" : ""
        }
  }
  ```
##### Starting Up
 `node Run.js` or [pm2](http://pm2.keymetrics.io/) can run your bot.
