const debug = require('debug')('api:poolAdvanced');
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 12000,
    // develpmont DB- Not so reliable though
    host: 'remotemysql.com',
    user: 'UqYpVE4OuJ',
    password: 'vEwaUhPOnT',
    database: 'UqYpVE4OuJ',
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