const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const port = 1818;
const router = express.Router()
const pool = require('./pool');
const poolMedium = require('./poolMedium');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
module.exports = router;
app.use(express.static(path.resolve(__dirname, "../innrvue-client", "build")));
app.get("*", (req, res, next) => {
    // Serve index.html file if it doesn't recognize the route
    res.sendFile(path.resolve(__dirname, "../innrvue-client", "build", "index.html"));
});
app.listen(process.env.PORT || port)
app.use('/', router);
