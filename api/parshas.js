const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const port = 1818;
const router = express.Router()
const pool = require('./pool');
const poolMedium = require('./poolMedium');
const poolAdvanced = require('./poolAdvanced');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("", express.static("../client/build"));
const path = require('path');
require("dotenv").config();

router.get("/parshos", (req, res, next) => {
    pool.query("SELECT * FROM parshos",
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500),
                    console.log(error);
            }
            return res.status(200).json(
                results
            );
        });
});

router.get("/vorts", (req, res, next) => {
    pool.query("SELECT * FROM dvar_torahs",
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500),
                    console.log(error);
            }
            return res.status(200).json(
                results
            );
        });
});

router.get("/mediumVorts", (req, res, next) => {
    poolMedium.query("SELECT * FROM medium_vorts",
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500),
                    console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", error);
            }
            return res.status(200).json(
                results
            );
        });
});

router.get("/advancedVorts", (req, res, next) => {
    poolAdvanced.query("SELECT * FROM advanced_vorts",
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500),
                    console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", error);
            }
            return res.status(200).json(
                results
            );
        });
});
module.exports = router;
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
    app.listen(process.env.PORT)
}
app.listen(port);
app.use('/', router);
