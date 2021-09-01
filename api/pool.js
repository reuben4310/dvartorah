const debug = require('debug')('api:pool');

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 1200000000000000,
    // develpmont DB- Not so reliable though
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b672081ae66eb3',
    password: 'f8189290',
    database: 'heroku_a4dbd96976a5627',
    // private DB for backup
    // host: 'localhost',
    // user: 'rnSefar',
    // password: '1234',
    // database: 'sefaria',
    charset: 'utf8mb4'
});

pool.on('acquire', function (connection) {
    debug('Connection %d acquired', connection.threadId);
});

pool.on('connection', function (connection) {
    debug('creating connection');
});

pool.on('enqueue', function () {
    debug('Waiting for available connection slot');
});

pool.on('release', function (connection) {
    debug('Connection %d released', connection.threadId);
});

module.exports = pool;