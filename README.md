# Chat Web Application

The server side of the [ChatApp-client](https://github.com/OdedNir/ChatApp-client).

## How To Use

Clone the repository, `npm install` to install all dependencies and then `npm start` to start the server up and running.

> Runs locally on `localhost:5000`.

## Setting Up MongoDB Connection

Create a free MongoDB cloud database: [MongoDB Website](https://www.mongodb.com/).
After creating the DB, in your cluster, click the `connect` button.

This will open: 

<img src="/media/connect-db.png" alt="db connection" width="352" height="306"/>

Then copy the uri string from: 

<img src="/media/uri-db.png" alt="uri string" width="352" height="335"/>

Paste it here:

```javascript
// MongoDB Connection
const username = "USERNAME"; // REPLACE with your user name!
const password = "PASSWORD"; // REPLACE with your password!
// Put your uri inside: (Provided when creating a mongoDB database.)
// For example:
const uri = `mongodb+srv://${username}:${password}@chatapp.qlqfi.mongodb.net/ChatApp?retryWrites=true&w=majority`;
```
