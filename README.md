## Get started

### Server side :arrows_counterclockwise:

1. **Install dependencies:**  Inside the [Server](https://github.com/luis11anillo/Pivvot_test/tree/master/Server) folder run the command
```bash
npm install
```
2. **Setting connection:** Change the `.env.example` file to `.env` and set your configuration
``` js
PORT =3000  

MYSQL_HOST ='localhost' | 127.0.0.1
MYSQL_USER ='root'
MYSQL_PASSWORD =''
MYSQL_DB ='DB_Name'
MYSQL_PORT =3306
```

3. **Starting Server**
```bash
npm run dev
```
<br>

### Client side :iphone:
1. **Install dependencies:**  Inside the [Frontend](https://github.com/luis11anillo/Pivvot_test/tree/master/Frontend) folder run the command
```bash
npm install
```

> Note. 
When developing with **Expo**, you need to use the <ins>IP of the host machine</ins> instead of **localhost** or **127.0.0.1**. 

2. **Replace:** Make sure to replace <your-local-ip> with the correct IP of your machine. Search the **const url** and change it
```js
const url = "http://<your-local-ip>:3000/notes"
```
3. Start the app
```bash
npx expo start
```
