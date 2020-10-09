const cassandra = require('cassandra-driver');
const TimeUuid = require('cassandra-driver').types.TimeUuid;

// crendentials
const SECURE_CONNECT_BUNDLE = process.env.SECURE_CONNECT_BUNDLE;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const KEYSPACE = process.env.KEYSPACE;

// Init the connection and return the client
function init_connection(){
    var connection = {}
    connection.client = new cassandra.Client({ 
        cloud: { secureConnectBundle: SECURE_CONNECT_BUNDLE },
        keyspace: KEYSPACE,
        credentials: { username: USERNAME, password: PASSWORD } 
    });
    return connection
}

connection = init_connection()


module.exports = connection;