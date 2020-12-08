const express = require('express');
const cors = require('cors')
const http = require('http');
const path = require('path');


const port = process.env.PORT || 3001;
const app = express();


app.use(cors())
app.use(express.static(__dirname + '/dist/hrmfrontend'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));