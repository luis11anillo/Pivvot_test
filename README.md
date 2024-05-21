## Get started

### Server side :arrows_counterclockwise:

1. **Install dependencies:**  Inside the Server folder [Server](https://github.com/luis11anillo/Pivvot_test/tree/master/Server) run the command
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
