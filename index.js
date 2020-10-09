require('dotenv').config();
const connection = require('./config/db_connection');
const Uuid       = require('cassandra-driver').types.Uuid;

const express = require('express');
const apiRoutes = require("./routes/api-routes");
const app = express();
const port = process.env.PORT || 3000;

var path = require('path');
var templates = path.join(__dirname, 'resources/html');

app.use('/resources/js', express.static(path.join(__dirname, 'resources/js/')));
app.use('/resources/css', express.static(path.join(__dirname, 'resources/css/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(templates, 'index.html'));
})

app.get('/health', (req, res) => {
    let connected = false;

    connection.client.execute('SELECT * FROM system.local')
        .then(() => {
            connected = true;
        })
        .catch((error) => {
            console.log(error.message);
        })
        .finally(() => {
            connection.client.shutdown();
            res.json({connected});
        });
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})